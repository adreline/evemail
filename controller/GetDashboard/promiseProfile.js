const esi = require('../../esi/eve-esi-meta')
const { downloadFile } = require('../../download.js')
const meta = new esi.MetaApi()

/**
 * Promises information on the character, that belongs under given sso token,
 * including character id and name
 *
 * @param {*} token
 * @return {*} 
 */
function getCharacter(token){
    return new Promise((resolve, reject) => {
        meta.getVerify({
            'authorization': `Bearer ${token}`
        }, (error, data, response)=>{
            if (error) {
                reject(error)
              } else {
                resolve(data)
              }
        })
    })
}
/**
 * Promises to download a character profile picture.
 * Resolve will contain the filename
 *
 * @param {*} id
 * @return {*} 
 */
function getCharacterPicture(id){
    return new Promise((resolve, reject) => {
        let filename = `${id}_character_picture.jpg`
        downloadFile(`https://images.evetech.net/characters/${id}/portrait`, `views/res/${filename}`)
        .then(()=>{
            resolve(filename)
        })
        .catch(e => {
            reject(e)
        })
    })
}

exports.getCharacter = getCharacter;
exports.getCharacterPicture = getCharacterPicture;