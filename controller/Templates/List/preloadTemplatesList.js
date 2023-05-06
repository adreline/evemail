const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('templates', {
    getTemplates: () => ipcRenderer.invoke('getTemplates'),
    openTemplateEditor: (id) => ipcRenderer.send('openTemplateEditor', id),
    reloadTemplatesList: () => ipcRenderer.invoke('reloadTemplatesList'),
    deleteTemplate: (id) => ipcRenderer.send('deleteTemplate', id),
    viewTemplate: (id) => ipcRenderer.invoke('previewTemplate', [ id ])
})