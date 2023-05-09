const { app, BrowserWindow, ipcMain } = require('electron');
const { promises: Fs } = require('fs');
const path = require('path');
const { buildWindow, closeWindow, reloadWindow } = require(`${global.root}/windows.js`);

ipcMain.on('openTemplateEditor', (template) => openTemplatesEditor(template, buildWindow('templatesEditor', 'templatesList')))
ipcMain.handle('closeTemplatesEditor', () => closeWindow('templatesEditor'))
ipcMain.handle('reloadTemplatesList', () => reloadWindow('templatesList'))

function openTemplatesEditor(template, templatesEditor){
    console.log('[promiseTemplatesEditor.js] opening template editor');
    return new Promise((resolve, reject) => {
        templatesEditor.on('close', event => { resolve() })
        templatesEditor.loadFile(`${global.root}/views/editor.html`)
    })
}

exports.openTemplatesEditor = openTemplatesEditor