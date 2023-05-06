const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('editor', {
    saveTemplate: (template) => ipcRenderer.send('saveTemplate', template),
    closeTemplatesEditor: () => ipcRenderer.invoke('closeTemplatesEditor'),
    reloadTemplatesList: () => ipcRenderer.invoke('reloadTemplatesList'),
})