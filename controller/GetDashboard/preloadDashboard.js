const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('dashboard', {
    getCharacter: () => ipcRenderer.invoke('getCharacter'),
})