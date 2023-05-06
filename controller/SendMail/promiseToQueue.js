const { ipcMain } = require('electron');
const { buildWindow } = require('../../windows.js');
const { promiseTemplate } = require('../Templates/crudTemplates.js');
const { sendEvemails } = require('./promiseToSend.js');

function askForTemplate(){
    console.log('[promiseToQueue.js] select template to send');
    return new Promise((resolve, reject) => {
        let askForTemplate = buildWindow('askForTemplate', 'dashboard')
        ipcMain.once('queue:answerForTemplate', (event, template_id) => {
          resolve(template_id) 
          console.log('[promiseToQueue.js] template selected');
          askForTemplate.close()
        })
        askForTemplate.loadFile('views/windows/_selectTemplate.html')
    })
}

function askForConfirmation(template){
    console.log('[promiseToQueue.js] asking for template choice confirmation');
    return new Promise((resolve, reject) => {
        let askForConfirmation = buildWindow('askForConfirmation', 'dashboard')
        ipcMain.once('queue:answerForConfirmation', (event, yes_or_no) => {
            console.log('[promiseToQueue.js] confirmation received');
            yes_or_no ? resolve() : reject()
            askForConfirmation.close()
        })
        askForConfirmation.loadFile('views/windows/_mailPreview.html')
        .then(()=>{
            console.log('[promiseToQueue.js] sending template for preview');
            askForConfirmation.webContents.send('queue:templateToPreview', template)
        })
    })
}

function trackTask(task){
    console.log('[promiseToQueue.js] opening task tracking');
    let taskProgress = buildWindow('taskProgress')
    taskProgress.loadFile('views/windows/_taskProgress.html')
    .then(()=>{
        taskProgress.focus()
        task.on('mailer:progress', progress => {
            console.log('[promiseToQueue.js] task advances');
            taskProgress.webContents.send('task:progress', progress)
        })
        task.on('mailer:error', err => {
            console.log('[promiseToQueue.js] task error');
            taskProgress.webContents.send('task:error', err)
        })
        task.on('mailer:pause', err => {
            console.log('[promiseToQueue.js] task paused');
            taskProgress.webContents.send('task:pause', err)
        })
        task.on('mailer:done', () => {
            console.log('[promiseToQueue.js] task finished');
            taskProgress.webContents.send('task:done')
        })
        task.on('mailer:resume', () => {
            console.log('[promiseToQueue.js] task resumed');
            taskProgress.webContents.send('task:resume')
        })
        task.on('mailer:begin', () => {
            console.log('[promiseToQueue.js] task began');
            taskProgress.webContents.send('task:begin')
        })
        task.emit('mailer:ready')
    })
}

function startTask(recipients){
    return new Promise((resolve, reject) => {
        askForTemplate()
        .then( template_id => {
            return promiseTemplate(template_id)
        })
        .then( template => {
            askForConfirmation(template)
            .then(() => {
                return sendEvemails(recipients, {
                    subject: template.subject,
                    body: template.body
                })
            })
            .catch( e => { 
                if(e === undefined){
                    reject('[promiseToQueue.js] task cancelled by user')
                }else{
                    reject(`[promiseToQueue.js] task queue failed: ${e}`)
                }
             })
            .then( task => {
                console.log('[promiseToQueue.js] task queued');
                trackTask(task)
                resolve()
            })
        })
    })
}

exports.startTask = startTask