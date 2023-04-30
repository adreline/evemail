const { ipcMain, BrowserWindow } = require('electron')
const path = require('path')
const { promises: Fs } = require('fs');
const { createHash } = require('crypto');


/**
 * Asks the user to fill out env information
 *
 * @return {*} 
 */
function askForEnv(){
  return new Promise((resolve, reject) => {
      const askEnv = new BrowserWindow({ 
        webPreferences: {
          preload: path.join(__dirname, 'preloadAskEnv.js'),
        }
      })
      ipcMain.on('getEnv', (event, data) => {
        resolve(data) 
        askEnv.close()
      })
      askEnv.loadFile('views/windows/_askEnv.html')
  })
}

function encryptAppSecret(secret){
  return Buffer.from(createHash('sha256').update(secret).digest('hex')).toString('base64').replace("==", "");
}

/**
 * Returns a Promise of app id and app secret, taken from user input or read from file
 *
 * @return {*} 
 */
function getEnv(){
    return new Promise((resolve, reject) => {
        Fs.access('./env.json')
        .then(()=>{
          console.log('[promiseAskEnv.js] env.json detected, reading');
          return Fs.readFile('./env.json', { encoding: 'utf8' })
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
            resolve(env)
            Fs.writeFile('./env.json', JSON.stringify(env))
          }
        })
    })
}

exports.getEnv = getEnv;