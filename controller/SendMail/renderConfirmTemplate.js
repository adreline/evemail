confirmTemplate.onTemplateToPreview((event, template) => {
    document.getElementById('subject').innerHTML = template.subject
    constructTextPreview(template.body, document.getElementById('body'))
})

document.getElementById('btn-confirm').addEventListener('click', () => {
    confirmTemplate.answerForConfirmation(true)
})
document.getElementById('btn-cancel').addEventListener('click', () => {
    confirmTemplate.answerForConfirmation(false)
})