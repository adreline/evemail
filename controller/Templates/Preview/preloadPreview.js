const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('preview', {
    onTemplateToPreview: (callback) => ipcRenderer.on('templateToPreview', callback),
})