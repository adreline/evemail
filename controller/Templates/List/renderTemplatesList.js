const openEditorButton = document.getElementById('open-template-editor')

openEditorButton.addEventListener('click', event => {
    templates.openTemplateEditor(0)
})

templates.getTemplates()
.then( db => {

    let table = document.getElementById('table')
    let table_body = document.getElementById('table-body')

    let prototype = [
        { key: "id", tag: "td" },
        { key: "subject", tag: "td" },
        { tag: "td", children: [
            { tag: "div", class: ["buttons"], children: [ 
                { tag: "button", class: ["button", "is-primary", "is-small"], text: "View" },
                { tag: "button", class: ["button", "is-danger", "is-small"], text: "Del" },
            ]},
        ]}
    ]
    for(i in db.templates){
        db.templates[i].id = i
        prototype[2].children[0].children[0].name = "view-template"
        prototype[2].children[0].children[0].value = i
        prototype[2].children[0].children[1].name = "delete-template"
        prototype[2].children[0].children[1].value = i
        table_body.appendChild(constructTableRow(db.templates[i], prototype))
    }

    document.getElementsByName('view-template').forEach((elem) => {
        elem.addEventListener('click', event => {
            templates.viewTemplate(event.target.value)
        })
    })

    document.getElementsByName('delete-template').forEach((elem) => {
        elem.addEventListener('click', event => {
            templates.deleteTemplate(event.target.value)
            templates.reloadTemplatesList()
        })
    })

    table.classList.remove('is-hidden')
})
.catch( e => { console.log(e) })