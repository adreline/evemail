const { ipcMain } = require('electron');
const { buildWindow } = require('../../../windows.js');
const { promiseTemplate } = require('../crudTemplates.js');

ipcMain.handle('previewTemplate', (event, id) => promiseTemplatePreview(id));

function promiseTemplatePreview(id) {
    return new Promise((resolve, reject) => {
        let templatePreview = buildWindow('templatePreview', 'templatesList')
        promiseTemplate(id)
        .then( template => {
            templatePreview.on('close', event => { resolve() })
            templatePreview.loadFile('views/preview.html')
            .then(() => {
                templatePreview.webContents.send('templateToPreview', template)
            })
        })
    })
}


exports.promiseTemplatePreview = promiseTemplatePreview