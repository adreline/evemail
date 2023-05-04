const openEditorButton = document.getElementById('open-template-editor')

openEditorButton.addEventListener('click', event => {
    templates.openTemplateEditor(0)
})

templates.getTemplates()
.then( templates => {
    console.log(templates)
})
.catch( e => { console.log(e) })