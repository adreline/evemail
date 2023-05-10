const sso = require(`${global.root}/esi/eve-esi/src/sso.js`);
/**
 * Promises to receive a sso token. Uses ESI login page.
 *
 * @param {import("electron").Session} session
 * @param {Object} env
 * @return {Promise} 
 */
function loadSSOToken(session, env){
    return new Promise((resolve, reject) => {
        sso.showSSOLogin(session.defaultSession, env)
        .then( response => {
          resolve(response)
        })
        .catch((e)=>{ reject(e) })
    })
  } 

  exports.loginWithSSO = loadSSOToken