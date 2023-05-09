const { app, BrowserWindow, ipcMain } = require('electron');
const { promises: Fs } = require('fs');
const path = require('path');

const { buildWindow } = require(`${global.root}/windows.js`);
const { getEnv } = require(`${global.root}/controller/AskEnv/promiseAskEnv.js`);
const TemplatesList = require(`${global.root}/controller/Templates/List/promiseTemplatesList.js`);
const TemplatesEditor = require(`${global.root}/controller/Templates/Editor/promiseTemplatesEditor.js`);
const { getSSO } = require(`${global.root}/sso.js`);
const { getCharacter, getCharacterPicture } = require(`${global.root}/controller/GetDashboard/promiseProfile.js`);
const { promiseCorpMembers } = require(`${global.root}/controller/GetDashboard/promiseCorpMembers.js`);
const { startTask: sendEvemails } = require(`${global.root}/controller/SendMail/promiseToQueue.js`);
let sso = {}
let env = {}


/**
 * Initializes necessary environment variables such as app id and sso auth token
 *
 * @return {*} 
 */
function init(){
  console.log('[index.js] init start');
  return new Promise((resolve, reject) => {
    getEnv()
    .then( settings => {
      env = settings
      return getSSO()
    })
    .then( token => {
      sso = token
      if(!sso.hasOwnProperty('character')){
        console.log('[index.js] character data not found, pulling');
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
          Fs.writeFile(`${global.root}/token.json`, JSON.stringify(sso))
          console.log('[index.js] pull complete');
          resolve()
        })
      }else{
        resolve()
      }
    })
  })
}

app.whenReady().then(() => {
  let dashboard = buildWindow('dashboard');

  init()
  .then(()=>{
    console.log('[index.js] init finished');
    ipcMain.handle('getCharacter', () => { return sso.character })
    ipcMain.handle('getCorpMembers', () => { return promiseCorpMembers() })
    ipcMain.on('selectedMembers', (event, members) => sendEvemails(members))
    return dashboard.loadFile('views/index.html');
    return dashboard.loadFile(`${global.root}/views/index.html`);
  })
  
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})