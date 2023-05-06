const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('selectTemplate', {
  getTemplates: () => ipcRenderer.invoke('getTemplates'),
  answerForTemplate: (id) => ipcRenderer.send('queue:answerForTemplate', id),
})