const { ipcMain } = require('electron');
const { promises: Fs } = require('fs');
const { buildWindow } = require('../../../windows.js');

ipcMain.handle('getTemplates', () => { return promiseTemplates() });
// ipcMain.on('deleteTemplate', (template) => { })
// ipcMain.on('viewTemplate', (template) => { })
ipcMain.handle('openTemplatesList', () => { return promiseTemplatesList(buildWindow('templatesList', 'dashboard')) });

function promiseTemplates() {
    return new Promise((resolve, reject) => {
        Fs.access('./templates.json')
            .then(() => {
                console.log('[promiseTemplatesList.js] templates.json detected, reading');
                return Fs.readFile('./templates.json', { encoding: 'utf8' })
            })
            .catch(() => {
                console.log('[promiseTemplatesList.js] templates.json not found');
                return "[]"
            })
            .then(data => {
                resolve(JSON.parse(data))
            })
            .catch( e => { reject(e) })
    })
}

function promiseTemplatesList(templatesList) {
    return new Promise((resolve, reject) => {
        templatesList.on('close', event => { resolve() })
        templatesList.loadFile('views/templates.html')
    })
}


exports.promiseTemplatesList = promiseTemplatesList