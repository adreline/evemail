const { BrowserWindow } = require("electron");
const path = require('path');
const app_name = 'Quickdraft'
let repository = {}

const windows = {
    dashboard: { 
        width: 800,
        height: 600,
        title: `${app_name}`,
        webPreferences: {
          preload: path.join(__dirname, `/controller/GetDashboard/preloadDashboard.js`)
        }
      },
      templatesList: {
        modal: true,
        width: 800,
        height: 600,
        title: `${app_name} - List of mail templates`,
        webPreferences: {
            preload: path.join(__dirname, `/controller/Templates/List/preloadTemplatesList.js`)
        }
      },
      templatesEditor: {
        modal: true,
        width: 800,
        height: 600,
        title: `${app_name} - Create a new template`,
        webPreferences: {
            preload: path.join(__dirname, `/controller/Templates/Editor/preloadTemplatesEditor.js`)
        }
      },
      askEnv: {
        title: `${app_name} - Input app id and secret`,
          webPreferences: {
            preload: path.join(__dirname, `/controller/AskEnv/preloadAskEnv.js`),
          }
      },
      templatePreview: {
        title: `${app_name} - Template preview`,
        webPreferences: {
          preload: path.join(__dirname, `/controller/Templates/Preview/preloadPreview.js`),
        }
    },
    askForTemplate: {
      modal: true,
      title: `${app_name} - Choose template`,
      webPreferences: {
        preload: path.join(__dirname, `/controller/SendMail/preloadSelectTemplate.js`),
      }
    },
    askForConfirmation: {
      modal: true,
      title: `${app_name} - Confirm choice`,
      webPreferences: {
        preload: path.join(__dirname, `/controller/SendMail/preloadConfirmTemplate.js`),
      }
    },
    taskProgress: {
      title: `${app_name} - Task progress`,
      webPreferences: {
        preload: path.join(__dirname, `/controller/SendMail/preloadTaskProgress.js`),
      }
    }
}

function buildWindow(target, parent = undefined){
  console.log(`[windows.js] building window ${target}/${parent}`);
    if(windows.hasOwnProperty(target)){
        let window = windows[target]
        if(parent !== undefined && repository.hasOwnProperty(parent)){
            window.parent = BrowserWindow.fromId(repository[parent])
        }
        let windowObj = new BrowserWindow(window)
        repository[target] = windowObj.id
        return windowObj
    }
}

function closeWindow(target){
  console.log(`[windows.js] closing window ${target}`);
  if(repository.hasOwnProperty(target)){
    let window = BrowserWindow.fromId(repository[target])
    window.close()
    delete repository[target]
  }
}

function reloadWindow(target){
  console.log(`[windows.js] reloading window ${target}`);
  if(repository.hasOwnProperty(target)){
    let window = BrowserWindow.fromId(repository[target])
    window.reload()
  }
}

exports.buildWindow = buildWindow
exports.closeWindow = closeWindow
exports.reloadWindow = reloadWindow