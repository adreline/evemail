const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('confirmTemplate', {
    onTemplateToPreview: (callback) => ipcRenderer.on('queue:templateToPreview', callback),
    answerForConfirmation: (yes_or_no) => ipcRenderer.send('queue:answerForConfirmation', yes_or_no),
})