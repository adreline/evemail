const { app, BrowserWindow, ipcMain } = require('electron');
const { promises: Fs } = require('fs');
const path = require('path');

function openTemplatesEditor(template, templatesEditor){
    return new Promise((resolve, reject) => {
        
        templatesEditor.on('close', event => { resolve() })

        templatesEditor.loadFile('views/editor.html')

    })
}

exports.openTemplatesEditor = openTemplatesEditor