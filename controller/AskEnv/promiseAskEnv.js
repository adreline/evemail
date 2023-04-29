const { ipcMain, BrowserWindow } = require('electron')
const path = require('path')
/**
 * Returns a Promise of app id and app secret, taken from user input
 *
 * @return {*} 
 */
function getEnv(){
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

exports.getEnv = getEnv;