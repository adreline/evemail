const { BrowserWindow } = require('electron');
const url = require('url');
const axios = require('axios');
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
 * @type {*} */
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
 * @type {*} */
const sso_callback = 'https://localhost/eveauth/callback';
/** 
 * Will contain app id and app secret in b64 sha 256 format
 * @type {*} */
let settings = {};
const base = 'https://login.eveonline.com/v2/oauth/authorize/';

const sso_response_target = 'v2/oauth/token';
/**
 * Generates sso OAuth link
 *
 * @return {*} 
 */
function getSSOLink() {
    return encodeURI(`${base}?response_type=code&redirect_uri=${sso_callback}&client_id=${settings.app.id}&scope=${scope.join(' ')}&state=hehe`);
}
/**
 * Captures callback GET request from ESI OAuth 
 *
 * @param {*} url
 * @return {*} 
 */
function isSSORedirect(url) {
    let ex = /^https\:\/\/localhost\/eveauth\/callback\?code\=[\d\w_-]+\&state\=hehe/m;
    return ex.test(url)
}
/**
 * Executes the last step at ESI OAuth and returns the Promise of a final auth token
 *
 * @param {*} code
 * @return {*} 
 */
function sendSSOAuthRequest(code) {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('client_id', settings.app.id);
    params.append('code_verifier', settings.app.b64_sha_secret);

    return request.post(sso_response_target, params);
}
/**
 * Listens to web requests the app makes until it detects the ESI callback route
 * Returns Promise of verification code
 *
 * @param {*} session
 * @return {*} 
 */
function getSSOVerificationCode(session) {
    return new Promise((resolve, reject) => {
        session.webRequest.onBeforeRequest((details, callback) => {
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
 * @param {*} session
 * @param {*} env
 * @return {*} 
 */
function showSSOLogin(session, env) {
    settings = env
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

exports.showSSOLogin = showSSOLogin;