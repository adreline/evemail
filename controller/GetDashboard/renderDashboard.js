const pic = document.getElementById('character-picture')
const characterName = document.getElementById('character-name')

function constructNodeWithText(text, node){
    let nd = document.createElement(node)
    let tex_nd = document.createTextNode(text)
    nd.appendChild(tex_nd)
    return nd
}
function constructTableRow(character){
    let tr = document.createElement('tr')
    tr.appendChild(constructNodeWithText( character.characterName, 'td' ))
    tr.appendChild (constructNodeWithText( character.characterId, 'td' ))
    tr.appendChild (constructNodeWithText( character.logonDate, 'td' ))
    tr.appendChild (constructNodeWithText( character.startDate, 'td' ))
    return tr
}

dashboard.getCharacter()
.then(character => {
    pic.src = `./res/${character.picture}`
    characterName.innerText = character.name
    return dashboard.getCorpMembers()
})
.then( members => {
    let table = document.getElementById('member-table')
    let table_body = document.getElementById('member-table-body')
    for( i in members ){
        let member = members[i]
        let ld = new Date(member.logonDate)
        let sd = new Date(member.startDate)
        member.logonDate = ld.toLocaleString()
        member.startDate = sd.toLocaleString()
        table_body.appendChild(constructTableRow(member))
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