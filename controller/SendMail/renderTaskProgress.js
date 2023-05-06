const status = document.getElementById('status')
const title = document.getElementById('title')
const progress_bar_label = document.getElementById('label')
const progress_bar = document.getElementById('progress-bar')
const btn_cancel = document.getElementById('btn-cancel')
const btn_stop = document.getElementById('btn-stop')
const log = document.getElementById('log')

taskProgress.onTaskProgress((event, progress) => {
    console.log(progress);
    log.prepend([
        _constructNode({ tag: 'p', text: `Sent to ${progress.recipient}` })
    ])
    progress_bar_label.innerHTML = `${progress.current}/${progress.total}`
    progress_bar.setAttribute('max', progress.total)
    progress_bar.setAttribute('value', progress.current)
})
taskProgress.onTaskPause((event, msg) => {
    console.log(msg);
})
taskProgress.onTaskError((event, msg) => {
    console.log(msg);
})
taskProgress.onTaskFinished(() => {
    console.log('finished');
})