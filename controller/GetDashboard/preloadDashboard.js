const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('dashboard', {
    getCharacter: () => ipcRenderer.invoke('getCharacter'),
    getCorpMembers: () => ipcRenderer.invoke('getCorpMembers'),
    openTemplatesList: () => ipcRenderer.invoke('openTemplatesList'),
    putSelectedMembers: (members) => ipcRenderer.send('selectedMembers', members),
    root: global.root 
})