const pic = document.getElementById('character-picture')
const characterName = document.getElementById('character-name')



dashboard.getCharacter()
.then(character => {
    pic.src = `./res/${character.picture}`
    characterName.innerText = character.name
    return dashboard.getCorpMembers()
})
.then( members => {
    let table = document.getElementById('member-table')
    let table_body = document.getElementById('member-table-body')
    members = localiseDates([ "logonDate", "startDate" ], members)

    const prototype = [
        { tag: "input", type: "checkbox" },
        { key: "characterName", tag: "td" },
        { key: "characterId", tag: "td" },
        { key: "logonDate", tag: "td" },
        { key: "startDate", tag: "td" },
    ]
    for(i in members){
        prototype[0].id = `c-${members[i].characterId}`
        table_body.appendChild(constructTableRow(members[i],prototype))
    }

    table.classList.remove('is-hidden')
})
.catch( error => {
    const msg = document.getElementById('warning-message')
    const body = document.getElementById('warning-message-body')
    body.innerText = error
    msg.classList.remove('is-hidden')
    console.log(error)
})