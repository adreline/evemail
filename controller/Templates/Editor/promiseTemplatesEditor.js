const { app, BrowserWindow, ipcMain } = require('electron');
const { promises: Fs } = require('fs');
const path = require('path');
const { buildWindow } = require('../../../windows.js');

ipcMain.on('openTemplateEditor', (template) => { return openTemplatesEditor(template, buildWindow('templatesEditor', 'templatesList')) })

function openTemplatesEditor(template, templatesEditor){
    return new Promise((resolve, reject) => {
        templatesEditor.on('close', event => { resolve() })
        templatesEditor.loadFile('views/editor.html')
    })
}

exports.openTemplatesEditor = openTemplatesEditor