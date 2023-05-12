const { ipcMain, BrowserWindow } = require('electron')
const path = require('path')
const child_process = require('child_process')
const { promises: Fs } = require('fs');
const { createHash } = require('crypto');
const { buildWindow } = require(`${global.root}/windows.js`);


/**
 * Asks the user to fill out env information
 *
 * @return {Promise} 
 */
function askForEnv(){
  return new Promise((resolve, reject) => {
      let askEnv = buildWindow('askEnv')
      ipcMain.on('getEnv', (event, data) => {
        resolve(data) 
        askEnv.close()
      })
      ipcMain.handle('showEnvHelp', () => { child_process.execSync('start "" "https://github.com/adreline/quickdraft/wiki/Authentication-&-API-Access"') })
      askEnv.loadFile(`${global.root}/views/windows/_askEnv.html`)
  })
}

function encryptAppSecret(secret){
  return Buffer.from(createHash('sha256').update(secret).digest('hex')).toString('base64').replace("==", "");
}

/**
 * Returns a Promise of app id and app secret, taken from user input or read from file
 *
 * @return {Promise} 
 */
function getEnv(){
  console.log(global.root);
    return new Promise((resolve, reject) => {
        Fs.access(`${global.root}/env.json`)
        .then(()=>{
          console.log('[promiseAskEnv.js] env.json detected, reading');
          return Fs.readFile(`${global.root}/env.json`, { encoding: 'utf8' })
        })
        .catch(()=>{
          console.log('[promiseAskEnv.js] env.json not found, asking for input');
          return askForEnv()
        })
        .then(data => {
          console.log('[promiseAskEnv.js] received env.json');
          if(typeof data === 'string'){
            console.log('[promiseAskEnv.js] received env via file');
            resolve(JSON.parse(data))
          }else{
            console.log('[promiseAskEnv.js] received env via user input');
            env = {
              app: {
                b64_sha_secret: encryptAppSecret(data.secret),
                id: data.id
              }
            };
            
            Fs.writeFile(`${global.root}/env.json`, JSON.stringify(env))
            .then(()=>{ resolve(env) })
          }
        })
    })
}

exports.getEnv = getEnv;