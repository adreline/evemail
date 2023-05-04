const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('templates', {
    getTemplates: () => ipcRenderer.invoke('getTemplates'),
    openTemplateEditor: (template) => ipcRenderer.send('openTemplateEditor', template),
    deleteTemplate: (template) => ipcRenderer.send('deleteTemplate', template),
    viewTemplate: (template) => ipcRenderer.send('viewTemplate', template)
})