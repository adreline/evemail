const esi = require(`${global.root}/esi/eve-esi-meta`)
const { downloadFile } = require(`${global.root}/download.js`)
const meta = new esi.MetaApi()

/**
 * Promises information on the character, that belongs under given sso token,
 * including character id and name
 *
 * @param {string} token
 * @return {Promise} 
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
 * @param {number} id
 * @return {Promise} 
 */
function getCharacterPicture(id){
    return new Promise((resolve, reject) => {
        let filename = `${global.root}/views/res/${id}_character_picture.jpg`
        downloadFile(`https://images.evetech.net/characters/${id}/portrait`, `${filename}`)
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