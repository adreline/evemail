const pic = document.getElementById('character-picture')
const characterName = document.getElementById('character-name')

function getSelectedMembers(){
    let boxes = document.getElementsByName('selected-members')
    return Array.from(boxes).filter( elem => elem.checked ).map( elem => {
        let tmp = elem.value.split(':')
        return { name: tmp[0], id: tmp[1] }
    })
}

function selectAll(state){
 let boxes = document.getElementsByName('selected-members')
 boxes.forEach(box => {
    box.checked = state
 })
 enableButton()
}

function enableButton(){
    let boxes = document.getElementsByName('selected-members')
    let send = document.getElementById('send-mail-button')
    let any =  Array.from(boxes).find( elem => elem.checked )
    if(any === undefined){
        send.setAttribute('disabled', 'disabled')
        send.classList.add('is-hidden')
    }else{
        send.removeAttribute('disabled')
        send.classList.remove('is-hidden')
    }
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
    let select_all_box = document.getElementById('select-all')

    members = localiseDates([ "logonDate", "startDate" ], members)

    const prototype = [
        { tag: "input", type: "checkbox" },
        { key: "characterName", tag: "td" },
        { key: "characterId", tag: "td" },
        { key: "logonDate", tag: "td" },
        { key: "startDate", tag: "td" },
    ]
    for(i in members){
        prototype[0].name = "selected-members"
        prototype[0].value = `${members[i].characterName}:${members[i].characterId}`
        table_body.appendChild(constructTableRow(members[i],prototype))
    }

    table.classList.remove('is-hidden')
    select_all_box.addEventListener('change', event => { selectAll(event.currentTarget.checked) }) 
    document.getElementsByName('selected-members').forEach( elem => { elem.addEventListener('change', event => { enableButton() }) })
    document.getElementById('send-mail-button').addEventListener('click', event => { window.dashboard.putSelectedMembers(getSelectedMembers()) } )

})
.catch( error => {
    const msg = document.getElementById('warning-message')
    const body = document.getElementById('warning-message-body')
    body.innerText = error
    msg.classList.remove('is-hidden')
    console.log(error)
})