const status_label = document.getElementById('status')
const title = document.getElementById('title')
const progress_bar_label = document.getElementById('label')
const progress_bar = document.getElementById('progress-bar')
const btn_cancel = document.getElementById('btn-cancel')
const btn_stop = document.getElementById('btn-stop')
const log = document.getElementById('log')

taskProgress.onTaskProgress((event, progress) => {
    log.prepend(constructLog('info', `Sent to ${progress.recipient}`))
    progress_bar_label.innerHTML = `${progress.current}/${progress.total}`
    progress_bar.setAttribute('max', progress.total)
    progress_bar.setAttribute('value', progress.current)
    title.innerHTML = `Sending evemail to ${progress.total} recipients`
})
taskProgress.onTaskBegin((event, msg) => {
    log.prepend(constructLog('info', 'Starting task'))
    status_label.innerHTML= `In progress`
})
taskProgress.onTaskPause((event, msg) => {
    log.prepend(constructLog('warning', `Pausing task for ${msg.time} seconds`))

    let t = msg.time - 5
    let countdown = setInterval(() => {
        if(t < 1) clearInterval(countdown)
        status_label.innerHTML= `Paused for ${t}s`
        t--
    }, 1000)
})
taskProgress.onTaskResume((event, msg) => {
    log.prepend(constructLog('info', 'Resuming task'))
    status_label.innerHTML= `In progress`
})
taskProgress.onTaskError((event, msg) => {
    log.prepend(constructLog('warning', `Failed to send to ${msg.recipient}, reason: ${msg.error}`))
})
taskProgress.onTaskFinished((event, msg) => {
    log.prepend(constructLog('success', 'Task is finished'))
    status_label.innerHTML= `Finished`
})