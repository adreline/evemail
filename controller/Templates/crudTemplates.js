const { ipcMain } = require('electron');
const { promises: Fs } = require('fs');

const db_stub = '{ "meta": { "i": 0 }, "templates": {}}';
const db_path = `${global.root}/templates/db.json`;

ipcMain.on('saveTemplate', (event, template) => promiseToSaveTemplate(template))
function promiseToSaveTemplate(template){
    console.log('[crudTemplates.js] template save requested');
    return new Promise((resolve, reject) => {
        promiseTemplates()
        .then( db => {
            let i = db.meta.i + 1
            db.templates[i] = template
            db.meta.i = i
            return Fs.writeFile(db_path, JSON.stringify(db))
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

ipcMain.on('deleteTemplate', (event, id) => promiseToDeleteTemplate(id))
function promiseToDeleteTemplate(id){
    console.log(`[crudTemplates.js] requested deletion of template ${id}`);
    return new Promise((resolve, reject) => {
        promiseTemplates()
        .then( db => {
            if(db.templates.hasOwnProperty(id)){
                delete db.templates[id]
            }
            return Fs.writeFile(db_path, JSON.stringify(db))
        })
        .then(() => { 
            console.log('[crudTemplates.js] template deleted');
            resolve() 
        })
        .catch( e => { 
            console.log(`[crudTemplates.js] template deletion rejected: ${e}`);
            reject(e) 
        })
    })
}

function promiseTemplate(id){
    console.log(`[crudTemplates.js] requested preview of template ${id}`);
    return new Promise((resolve, reject) => {
        promiseTemplates()
        .then( db => {
            if(db.templates.hasOwnProperty(id)){
                resolve(db.templates[id])
            }else{
                reject(`[crudTemplates.js] template ${id} not found`)
            }
        })
        .catch( e => reject(e))
    })
}

ipcMain.handle('getTemplates', () => promiseTemplates());
function promiseTemplates() {
    console.log('[crudTemplates.js] templates list requested');
    return new Promise((resolve, reject) => {
        Fs.access(db_path)
            .then(() => {
                return Fs.readFile(db_path, { encoding: 'utf8' })
            })
            .catch(() => {
                return db_stub
            })
            .then( db => {
                resolve(JSON.parse(db))
            })
            .catch( e => { reject(e) })
    })
}

exports.promiseTemplate = promiseTemplate;
exports.promiseToSaveTemplate = promiseToSaveTemplate;
exports.promiseToDeleteTemplate = promiseToDeleteTemplate;
exports.promiseTemplates = promiseTemplates;