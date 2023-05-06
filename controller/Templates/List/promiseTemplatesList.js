const { ipcMain } = require('electron');
const { buildWindow } = require('../../../windows.js');
const CRUD = require('../crudTemplates.js');

ipcMain.handle('openTemplatesList', () => promiseTemplatesList(buildWindow('templatesList', 'dashboard')));

function promiseTemplatesList(templatesList) {
    return new Promise((resolve, reject) => {
        templatesList.on('close', event => { resolve() })
        templatesList.loadFile('views/templates.html')
    })
}


exports.promiseTemplatesList = promiseTemplatesList