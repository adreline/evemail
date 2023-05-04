const { app, BrowserWindow, ipcMain } = require('electron');
const { promises: Fs } = require('fs');
const path = require('path');

const { getEnv } = require('./controller/AskEnv/promiseAskEnv.js');
const { openTemplatesEditor } = require('./controller/Templates/Editor/promiseTemplatesEditor.js');
const { promiseTemplatesList } = require('./controller/Templates/List/promiseTemplatesList.js');
const { getSSO } = require('./sso.js');
const { getCharacter, getCharacterPicture } = require('./controller/GetDashboard/promiseProfile.js');
const { promiseCorpMembers } = require('./controller/GetDashboard/promiseCorpMembers.js');
const { sendEvemails } = require('./controller/sendMail/promiseToSend.js');
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
          Fs.writeFile('./token.json', JSON.stringify(sso))
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

  const dashboard = new BrowserWindow({ 
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './controller/GetDashboard/preloadDashboard.js')
    }
  });

  const templatesList = {
    parent: dashboard,
    modal: true,
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, './controller/Templates/List/preloadTemplatesList.js')
    }
  };

  const templatesEditor = {
    parent: templatesList,
    modal: true,
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, './controller/Templates/Editor/preloadTemplatesEditor.js')
    }
  };

  init()
  .then(()=>{
    console.log('[index.js] init finished');
    ipcMain.handle('getCharacter', () => { return sso.character })
    ipcMain.handle('getCorpMembers', () => { return promiseCorpMembers() })
    ipcMain.handle('openTemplatesList', () => { return promiseTemplatesList(new BrowserWindow(templatesList)) })
    ipcMain.on('selectedMembers', (event, members) => { 
        sendEvemails(members, {
          subject: 'test subject',
          body: 'test body'
        })
     })


    ipcMain.on('openTemplateEditor', (template) => { return openTemplatesEditor(template, new BrowserWindow(templatesEditor)) })


    return dashboard.loadFile('views/index.html');
  })
  
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})