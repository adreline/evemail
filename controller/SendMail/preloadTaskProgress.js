const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('taskProgress', {
    onTaskProgress: (callback) => ipcRenderer.on('task:progress', callback),
    onTaskPause: (callback) => ipcRenderer.on('task:pause', callback),
    onTaskError: (callback) => ipcRenderer.on('task:error', callback),
    onTaskFinished: (callback) => ipcRenderer.on('task:finished', callback),
})