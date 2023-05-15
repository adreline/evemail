const { ipcMain } = require('electron');
const { buildWindow } = require(`${global.root}/windows.js`);
const { promiseTemplate } = require(`${global.root}/controller/Templates/crudTemplates.js`);
const { sendEvemails } = require(`${global.root}/controller/SendMail/promiseToSend.js`);
const { renderTemplate } = require(`${global.root}/renderer.js`);
/**
 * Asks user to select a template to use in this task
 *
 * @return {Promise} 
 */
function askForTemplate(){
    console.log('[promiseToQueue.js] select template to send');
    return new Promise((resolve, reject) => {
        let askForTemplate = buildWindow('askForTemplate', 'dashboard')
        ipcMain.once('queue:answerForTemplate', (event, template_id) => {
          resolve(template_id) 
          console.log('[promiseToQueue.js] template selected');
          askForTemplate.close()
        })
        askForTemplate.loadFile(`${global.root}/views/windows/_selectTemplate.html`)
    })
}
/**
 * Asks the user to confirm their template choice while rendering the preview of the template
 *
 * @param {Object} template
 * @param {Object} recipients
 * @return {Promise} 
 */
function askForConfirmation(template, recipients){
    console.log('[promiseToQueue.js] asking for template choice confirmation');
    return new Promise((resolve, reject) => {
        let askForConfirmation = buildWindow('askForConfirmation', 'dashboard')
        ipcMain.once('queue:answerForConfirmation', (event, yes_or_no) => {
            console.log('[promiseToQueue.js] confirmation received');
            yes_or_no ? resolve() : reject()
            askForConfirmation.close()
        })
        askForConfirmation.loadFile(`${global.root}/views/windows/_mailPreview.html`)
        .then(()=>{
            console.log('[promiseToQueue.js] sending template for preview');

            let context = renderTemplate({
                template: global.clone(template),
                circumstances: [
                    recipients
                ]
            })
            askForConfirmation.webContents.send('queue:templateToPreview', context.template)
        })
    })
}
/**
 * Opens the task progress tracking window and forwards the async queue events to it
 *
 * @param {EventEmitter} task
 */
function trackTask(task){
    console.log('[promiseToQueue.js] opening task tracking');
    let taskProgress = buildWindow('taskProgress')
    taskProgress.loadFile(`${global.root}/views/windows/_taskProgress.html`)
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
        task.emit('mailer:ready') // this signals the queue that the ui is ready and the task can start
    })
}
/**
 * Initiates a new bulk mail task
 * 
 * takes care of all necessary steps
 * @param {Array} recipients
 * @return {Promise} 
 */
function startTask(recipients){
    return new Promise((resolve, reject) => {
        askForTemplate()
        .then( template_id => {
            return promiseTemplate(template_id)
        })
        .then( template => {
            askForConfirmation(template, recipients)
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