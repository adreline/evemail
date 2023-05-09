const { ipcMain } = require('electron');
const { buildWindow } = require(`${global.root}/windows.js`);
const CRUD = require(`${global.root}/controller/Templates/crudTemplates.js`);
const Previews = require(`${global.root}/controller/Templates/Preview/promisePreview.js`);

ipcMain.handle('openTemplatesList', () => promiseTemplatesList(buildWindow('templatesList', 'dashboard')));

function promiseTemplatesList(templatesList) {
    return new Promise((resolve, reject) => {
        templatesList.on('close', event => { resolve() })
        templatesList.loadFile(`${global.root}/views/templates.html`)
    })
}


exports.promiseTemplatesList = promiseTemplatesList