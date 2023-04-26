const { app, BrowserWindow, session } = require('electron');
const esi = require('./esi/eve-esi');
const sso = require('./esi/eve-esi/src/sso.js');
const fs = require('fs');
let token = require('./token.json');

const createWindow = () => {
  const win = new BrowserWindow({ })
  win.loadFile('views/index.html')
}

function loadToken(){
  return new Promise((resolve, reject) => {
    if(!token.hasOwnProperty('access_token')){
      sso.showSSOLogin(session.defaultSession)
      .then( response => {
        token = response
        let jsonString = JSON.stringify(response)
        fs.writeFile('./token.json', jsonString, e => {
          if(e) reject(e)
        })
        resolve()
      })
      .catch((e)=>{ reject(e) })
    }else{
      resolve()
    }
  })
} 

app.whenReady().then(() => {
    createWindow()
    loadToken()
    .then(()=>{
      console.log(token)
    })
    .catch(e => {
      console.log(e)
    })
 
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})