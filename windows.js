const { BrowserWindow } = require("electron");
const path = require('path');

let repository = {}

const windows = {
    dashboard: { 
        width: 800,
        height: 600,
        webPreferences: {
          preload: path.join(__dirname, './controller/GetDashboard/preloadDashboard.js')
        }
      },
      templatesList: {
        modal: true,
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './controller/Templates/List/preloadTemplatesList.js')
        }
      },
      templatesEditor: {
        modal: true,
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './controller/Templates/Editor/preloadTemplatesEditor.js')
        }
      }
}

function buildWindow(target, parent = undefined){
    console.log(repository);
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

exports.buildWindow = buildWindow