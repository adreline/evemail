const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('dashboard', {
    getCharacter: () => ipcRenderer.invoke('getCharacter'),
    getCorpMembers: () => ipcRenderer.invoke('getCorpMembers'),
    putSelectedMembers: (members) => ipcRenderer.send('selectedMembers', members)
})