const { BrowserWindow, session } = require('electron');
const url = require('url');
const axios = require('axios');
const { promises: Fs } = require('fs');

const request = axios.create({
    baseURL: 'https://login.eveonline.com/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'login.eveonline.com'
    }
});
/**
 * App permissions scopes 
 * @type {Array} */
const scope = [
    'esi-mail.organize_mail.v1',
    'esi-mail.read_mail.v1',
    'esi-mail.send_mail.v1',
    'esi-corporations.read_corporation_membership.v1',
    'esi-characters.read_corporation_roles.v1',
    'esi-corporations.track_members.v1'
];
/** 
 * callback path, defined in the app at eve developer portal 
 * @type {string} */
const sso_callback = 'https://localhost/eveauth/callback';
const base = 'https://login.eveonline.com/v2/oauth/authorize/';

const sso_response_target = 'v2/oauth/token';
/**
 * Generates sso OAuth link
 *
 * @return {string} 
 */
function getSSOLink() {
    return encodeURI(`${base}?response_type=code&redirect_uri=${sso_callback}&client_id=${global.env.app.id}&scope=${scope.join(' ')}&state=hehe`);
}
/**
 * Captures callback GET request from ESI OAuth 
 *
 * @param {string} url
 * @return {boolean} 
 */
function isSSORedirect(url) {
    let ex = /^https\:\/\/localhost\/eveauth\/callback\?code\=[\d\w_-]+\&state\=hehe/m;
    return ex.test(url)
}
/**
 * Executes the last step at ESI OAuth and returns the Promise of a final auth token
 *
 * @param {string} code
 * @return {Promise} 
 */
function sendSSOAuthRequest(code) {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('client_id', global.env.app.id);
    params.append('code_verifier', global.env.app.b64_sha_secret);

    return request.post(sso_response_target, params);
}
/**
 * Refreshes the SSO Token
 *
 * @param {string} refresh_token
 * @return {Promise} 
 */
function refreshSSOToken(refresh_token) {
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', refresh_token);
    params.append('client_id', global.env.app.id);

    return request.post(sso_response_target, params);
}
/**
 * Listens to web requests the app makes until it detects the ESI callback route
 * Returns Promise of verification code
 *
 * @return {Promise} 
 */
function getSSOVerificationCode() {
    return new Promise((resolve, reject) => {
        session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
            if (isSSORedirect(details.url)) {
                callback({ cancel: true })
                let url = new URL(details.url);
                resolve(url.searchParams.get('code'), url.searchParams.get('state'))
            } else {
                callback({})
            }
        })
    })
}
/**
 * Displays the SSO login page and returns a Promise of SSO token
 *
 * @return {Promise} 
 */
function showSSOLogin() {
    return new Promise((resolve, reject) => {
        const win = new BrowserWindow({})
        win.loadURL(getSSOLink())

        getSSOVerificationCode(session)
            .then((code, state) => {
                sendSSOAuthRequest(code)
                    .then(response => {
                        win.close()
                        resolve(response.data)
                    })
                    .catch(e => {
                        win.close()
                        reject(e)
                    })
            })
    })
}

/**
 * Promises to refresh the sso token or reject if refreshing is not needed
 *
 * @param {Object} sso
 * @return {Promise} 
 */
function refreshIfExpired(sso) {

    return new Promise((resolve, reject) => {
        console.log(`[sso.js] current token will expire on ${sso.expires_at}`);
        let diff = sso.expires_at - (Date.now() + 10000)

        if (diff < 0) {
            // the token has expired or will expire in less then 10s
            refreshSSOToken(sso.refresh_token)
                .then(response => {
                    new_sso = response.data
                    console.log('[sso.js] token was refreshed');
                    sso.access_token = new_sso.access_token
                    sso.refresh_token = new_sso.refresh_token
                    sso.expires_at = getExpiryTimestamp(new_sso.expires_in)
                    Fs.writeFile(`${global.root}/token.json`, JSON.stringify(sso))
                        .then(() => { resolve(sso) })
                })
                .catch(e => {
                    console.log('[sso.js] refreshing token failed');
                    console.log(e);
                    reject(sso)
                })
        } else {
            console.log('[sso.js] refreshing the token was not necessary');
            // the token is valid and not stale
            resolve(sso)
        }

    })

}

/**
 * Creates a futore timestamp with given offset
 *
 * @param {number} offset
 * @return {number} 
 */
function getExpiryTimestamp(offset) {
    return expires_at = Date.now() + (offset * 1000)
}

/**
 * Promises to return a valid and fresh SSO token
 *
 * @return {Promise} 
 */
function ssoAuthorize() {

    return new Promise((resolve, reject) => {
        if (global.hasOwnProperty('sso')) {
            console.log('[sso.js] sso token is already in memory');
            refreshIfExpired(global.sso)
                .then(sso => {
                    global.sso = sso
                    resolve(sso)
                })

        } else {
            console.log('[sso.js] sso token not in memory');
            Fs.access(`${global.root}/token.json`)
                .then(() => {
                    console.log('[sso.js] sso token file present, reading');
                    return Fs.readFile(`${global.root}/token.json`, { encoding: 'utf8' })
                })
                .catch(() => {
                    console.log('[sso.js] sso token not found, asking for login');
                    return showSSOLogin()
                })
                .then((data) => {
                    console.log('[sso.js] received sso token');
                    let sso = {}
                    if (typeof data === 'string') {
                        sso = JSON.parse(data)
                        refreshIfExpired(sso)
                            .then(sso => {
                                global.sso = sso
                                resolve(sso)
                            })
                    } else {
                        data.expires_at = getExpiryTimestamp(data.expires_in)
                        Fs.writeFile(`${global.root}/token.json`, JSON.stringify(data))
                            .then(() => {
                                global.sso = data
                                resolve(data)
                            })
                    }
                })

        }

    })
}

exports.getSSO = ssoAuthorize;