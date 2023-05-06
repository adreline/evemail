const status = document.getElementById('status')
const title = document.getElementById('title')
const progress_bar_label = document.getElementById('label')
const progress_bar = document.getElementById('progress-bar')
const btn_cancel = document.getElementById('btn-cancel')
const btn_stop = document.getElementById('btn-stop')
const log = document.getElementById('log')

taskProgress.onTaskProgress((event, progress) => {
    let node = _constructNode({ tag: 'p', text: `Sent to ${progress.recipient}` })
    log.prepend(node)
    progress_bar_label.innerHTML = `${progress.current}/${progress.total}`
    progress_bar.setAttribute('max', progress.total)
    progress_bar.setAttribute('value', progress.current)
})
taskProgress.onTaskPause((event, msg) => {
    let node = _constructNode({ tag: 'p', text: `Pausing task for ${msg.time} seconds` })
    log.prepend(node)
})
taskProgress.onTaskError((event, msg) => {
    let node = _constructNode({ tag: 'p', text: `Failed to send to ${msg.recipient}, reason: ${msg.error}` })
    log.prepend(node)
})
taskProgress.onTaskFinished((event, msg) => {
    let node = _constructNode({ tag: 'p', text: `Task is finished` })
    log.prepend(node)
})