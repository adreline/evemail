const pic = document.getElementById('character-picture')
const characterName = document.getElementById('character-name')
const filter_mode = document.getElementById('filter-mode')
const btn_filter = document.getElementById('btn-filter')
const date_picker_y = document.getElementById('date-picker-youngest')
const date_picker_o = document.getElementById('date-picker-oldest')
const table = document.getElementById('member-table')
const table_body = document.getElementById('member-table-body')
const select_all_box = document.getElementById('select-all')
const six_months = 15770000000
const three_months = 7884000000

let current_date_y = 0
let current_date_o = 0

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

function handleFilters(){
    filter_mode.addEventListener('change', event => {
        let now = Date.now()
        if(event.target.value === '-1'){
            date_picker_y.classList.add(['is-hidden'])
            date_picker_o.classList.add(['is-hidden'])
            current_date_y = 0
            current_date_o = 0
        }
        if(event.target.value === '0'){
            date_picker_y.classList.remove(['is-hidden'])
            date_picker_o.classList.add(['is-hidden'])
            current_date_y = 0
            current_date_o = 0
            date_picker_y.value = ''
        }
        if(event.target.value === '1'){
            date_picker_y.classList.add(['is-hidden'])
            date_picker_o.classList.add(['is-hidden'])
            current_date_y = now - three_months
            current_date_o = now - six_months
        }
        if(event.target.value === '2'){
            date_picker_y.classList.add(['is-hidden'])
            date_picker_o.classList.add(['is-hidden'])
            current_date_y = now - six_months
            current_date_o = 0
        }

    })
    date_picker_y.addEventListener('change', event => {
        current_date_y = Date.parse(event.target.value)
        console.log(current_date_y);
    })

}

function applyFilter(members, time_oldest, time_youngest){
    return members.filter(member => {
        let last_online = Date.parse(member.logonDate)
        console.log(`${last_online} > ${time_oldest} && ${last_online} < ${time_youngest}`);
        return (last_online > time_oldest && last_online < time_youngest)
    })
}

function populateTable(members){
    table.classList.add('is-hidden')

    members = localiseDates([ "logonDate", "startDate" ], members)

    let prototype = [
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

}

function attachListeners(){
    document.getElementsByName('selected-members').forEach( elem => { 
        elem.addEventListener('change', event => { enableButton() }) 
    })
}

function clearTable(){
    document.getElementById('member-table-body').replaceChildren()
}

dashboard.getCharacter()
.then(character => {
    pic.src = `./res/${character.picture}`
    characterName.innerText = character.name
    return dashboard.getCorpMembers()
})
.then( members => {
    populateTable(members)
    attachListeners()
    select_all_box.addEventListener('change', event => { 
        selectAll(event.currentTarget.checked) 
    }) 
    document.getElementById('send-mail-button').addEventListener('click', event => { 
        window.dashboard.putSelectedMembers(getSelectedMembers()) 
    })
    document.getElementById('open-templates-list').addEventListener('click', event => {
        window.dashboard.openTemplatesList()
    })
    handleFilters()
    btn_filter.addEventListener('click', event => {
        let filtered_members = applyFilter(members, current_date_o, current_date_y)
        clearTable()
        populateTable(filtered_members)
        attachListeners()
    })
})
.catch( error => {
    const msg = document.getElementById('warning-message')
    const body = document.getElementById('warning-message-body')
    body.innerText = error
    msg.classList.remove('is-hidden')
    console.log(error)
})