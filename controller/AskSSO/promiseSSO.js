const sso = require('../../esi/eve-esi/src/sso.js');
/**
 * Promises to receive a sso token. Uses ESI login page.
 *
 * @param {*} session
 * @param {*} env
 * @return {*} 
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