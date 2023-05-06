const { ipcMain } = require('electron');
const { promises: Fs } = require('fs');


ipcMain.on('saveTemplate', (event, template) => { return promiseToSaveTemplate(template) })
function promiseToSaveTemplate(template){
    console.log('[crudTemplates.js] template save requested');
    return new Promise((resolve, reject) => {
        Fs.access('./templates/db.json')
        .then(() => {
            return Fs.readFile('./templates/db.json')
        })
        .catch(() => {
            return '{ "meta": { "i": 0 }, "templates": {}}'
        })
        .then( db => {
            db = JSON.parse(db)
            let i = db.meta.i + 1
            db.templates[i] = template
            db.meta.i = i
            return Fs.writeFile('./templates/db.json', JSON.stringify(db))
        })
        .then(() => { 
            console.log('[crudTemplates.js] template saved');
            resolve() 
        })
        .catch( e => { 
            console.log(`[crudTemplates.js] template save rejected: ${e}`);
            reject(e) 
        })
    })
}

// ipcMain.on('deleteTemplate', (id) => { })
// ipcMain.on('viewTemplate', (id) => { })

ipcMain.handle('getTemplates', () => promiseTemplates());
function promiseTemplates() {
    console.log('[crudTemplates.js] templates list requested');
    return new Promise((resolve, reject) => {
        Fs.access('./templates/db.json')
            .then(() => {
                return Fs.readFile('./templates/db.json', { encoding: 'utf8' })
            })
            .catch(() => {
                return "[]"
            })
            .then(data => {
                resolve(JSON.parse(data))
            })
            .catch( e => { reject(e) })
    })
}
