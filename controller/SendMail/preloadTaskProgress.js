const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('taskProgress', {
    onTaskProgress: (callback) => ipcRenderer.on('task:progress', callback),
    onTaskPause: (callback) => ipcRenderer.on('task:pause', callback),
    onTaskResume: (callback) => ipcRenderer.on('task:resume', callback),
    onTaskBegin: (callback) => ipcRenderer.on('task:begin', callback),
    onTaskError: (callback) => ipcRenderer.on('task:error', callback),
    onTaskFinished: (callback) => ipcRenderer.on('task:done', callback),
})