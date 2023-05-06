
selectTemplate.getTemplates()
.then( db => {

    let table = document.getElementById('table')
    let table_body = document.getElementById('table-body')

    let prototype = [
        { key: "id", tag: "td" },
        { key: "subject", tag: "td" },
        { tag: "td", children: [
            { tag: "div", class: ["buttons"], children: [ 
                { tag: "button", class: ["button", "is-primary", "is-small"], text: "Select" },
            ]},
        ]}
    ]
    for(i in db.templates){
        db.templates[i].id = i
        prototype[2].children[0].children[0].name = "select-template"
        prototype[2].children[0].children[0].value = i
        table_body.appendChild(constructTableRow(db.templates[i], prototype))
    }

    document.getElementsByName('select-template').forEach((elem) => {
        elem.addEventListener('click', event => {
            selectTemplate.answerForTemplate(event.target.value)
        })
    })

    table.classList.remove('is-hidden')
})
.catch( e => { console.log(e) })