document.getElementById('save').addEventListener('click', () => {
    let template = {
        body: document.getElementById('body').value,
        subject: document.getElementById('title').value,
        
        variables: {}
    }
    editor.saveTemplate(template)
    editor.closeTemplatesEditor()
    editor.reloadTemplatesList()
})