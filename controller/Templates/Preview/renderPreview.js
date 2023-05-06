preview.onTemplateToPreview((event, template) => {
    document.getElementById('title').innerHTML = template.subject
    constructTextPreview(template.body, document.getElementById('body'))
})
