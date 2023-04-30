const pic = document.getElementById('character-picture')
const characterName = document.getElementById('character-name')

dashboard.getCharacter()
.then(character => {
    pic.src = `./res/${character.picture}`
    characterName.innerText = character.name
})
