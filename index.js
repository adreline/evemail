const { app, BrowserWindow, session, ipcMain } = require('electron');
const { promises: Fs } = require('fs');
const path = require('path');

const esi = require('./esi/eve-esi');
const { getEnv } = require('./controller/AskEnv/promiseAskEnv.js');
const { loginWithSSO } = require('./controller/AskSSO/promiseSSO.js');
const { getCharacter, getCharacterPicture } = require('./controller/GetDashboard/promiseProfile.js');
let sso = {}
let env = {}

/**
 * Initializes necessary environment variables such as app id and sso auth token
 *
 * @return {*} 
 */
function init(){
  console.log('init start');
  return new Promise((resolve, reject) => {
      Fs.access('./env.json')
      .then(()=>{
        console.log('env.json detected, reading');
        return Fs.readFile('./env.json', { encoding: 'utf8' })
      })
      .catch(()=>{
        console.log('env.json not found, asking for input');
        return getEnv()
      })
      .then(data => {
        console.log('received env.json');
        if(typeof data === 'string'){
          console.log('received env via file');
          env = JSON.parse(data)
        }else{
          console.log('received env via user input');
          env.app = data
          Fs.writeFile('./env.json', JSON.stringify(env))
        }
        console.log('checking for sso token');
        return Fs.access('./token.json')
      })
      .then(()=>{
        console.log('sso token present, reading');
        return Fs.readFile('./token.json', { encoding: 'utf8' })
      })
      .catch(() => {
        console.log('sso token not found, asking for login');
        return loginWithSSO(session, env)
      })
      .then(data => {
        console.log('received sso token');
        if(typeof data === 'string'){
          console.log('received token via file');
          sso = JSON.parse(data)
        }else{
          console.log('received token via sso login');
          sso = data
          Fs.writeFile('./token.json', JSON.stringify(sso))
        }

        if(!sso.hasOwnProperty('character')){
          console.log('character data not found, pulling');
          getCharacter(sso.access_token)
          .then(character => {
            sso.character = {
              id: character.characterID,
              name: character.characterName
            }
            return getCharacterPicture(sso.character.id)
          })
          .then(filename => {
            sso.character.picture = filename
            Fs.writeFile('./token.json', JSON.stringify(sso))
            console.log('pull complete');
            resolve()
          })
        }else{
          resolve()
        }
      })
  })
}

app.whenReady().then(() => {
  const dashboard = new BrowserWindow({ 
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './controller/GetDashboard/preloadDashboard.js')
    }
  });

  init()
  .then(()=>{
    console.log('init finished');
    ipcMain.handle('getCharacter', () => { return sso.character })
    return dashboard.loadFile('views/index.html');
  })
  
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})