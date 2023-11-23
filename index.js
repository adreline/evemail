const { app, BrowserWindow, ipcMain } = require('electron');
global.root = app.getAppPath();
if (require('electron-squirrel-startup')){ 
  let { handleSquirrelEvent } = require(`${global.root}/Squirrel.js`); 
  // this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}
}
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
      global.env = settings
      return getSSO()
    })
    .then( () => {
      if(!global.sso.hasOwnProperty('character')){
        console.log('[index.js] character data not found, pulling');
        getCharacter(global.sso.access_token)
        .then(character => {
          global.sso.character = {
            id: character.characterID,
            name: character.characterName
          }
          return getCharacterPicture(global.sso.character.id)
        })
        .then(filename => {
          global.sso.character.picture = filename
          Fs.writeFile(`${global.root}/token.json`, JSON.stringify(global.sso))
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
    ipcMain.handle('getCharacter', () => { return global.sso.character })
    ipcMain.handle('getCorpMembers', () => { return promiseCorpMembers() })
    ipcMain.handle('logout', () => { 
      Fs.access(`${global.root}/token.json`)
      .then(() => {
        return Fs.unlink(`${global.root}/token.json`)
      })
      .then(() => {
        app.relaunch()
        app.quit()
      })
     })
    ipcMain.on('selectedMembers', (event, members) => sendEvemails(members))
    
    return dashboard.loadFile(`${global.root}/views/index.html`);
  })
  
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})