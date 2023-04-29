const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('askEnv', {
  setEnv: (data) => ipcRenderer.send('getEnv', data),
})