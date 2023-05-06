const openEditorButton = document.getElementById('open-template-editor')

openEditorButton.addEventListener('click', event => {
    templates.openTemplateEditor(0)
})

templates.getTemplates()
.then( db => {

    let table = document.getElementById('table')
    let table_body = document.getElementById('table-body')

    const prototype = [
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
        table_body.appendChild(constructTableRow(db.templates[i], prototype))
    }

    table.classList.remove('is-hidden')
})
.catch( e => { console.log(e) })