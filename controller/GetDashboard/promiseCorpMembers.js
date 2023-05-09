const esi = require(`${global.root}/esi/eve-esi`)
const corpApi = new esi.CorporationApi()
const charApi = new esi.CharacterApi()

const { getSSO } = require(`${global.root}/sso.js`);

/**
 * Promises the corporation id of the given character
 *
 * @param {*} characterId
 * @return {*} 
 */
function promiseCorpId(characterId){
    return new Promise((resolve, reject) =>{
        charApi.getCharactersCharacterId(characterId, {}, (error, data, response) => {
            if (error) {
                reject(error)
              } else {
                resolve(data.corporationId)
              }
        })
    })
}

/**
 * Promises to lookup and add a character name to raw_member.
 * 
 * The Member tracking ESI route does not return character names, only ids and activity info 
 *
 * @param {*} raw_member
 * @return {*} 
 */
function promiseCharacterName(raw_member){
    return new Promise((resolve, reject) =>{
        charApi.getCharactersCharacterId(raw_member.characterId, {}, (error, data, response) => {
            if (error) {
                reject(error)
              } else {
                raw_member.characterName = data.name
                resolve(raw_member)
              }
        })
    })
}

/**
 * Promises to return corp members with information on their activity
 *
 * @param {*} corp_id
 * @param {*} sso
 * @return {*} 
 */
function promiseRawCorpMembers(corp_id, sso){
    return new Promise((resolve, reject) => {
        corpApi.getCorporationsCorporationIdMembertracking(corp_id, { token: sso.access_token }, (error, data, response) => {
            if (error) {
                let e = JSON.parse(error.response.res.text)
                reject(e.error)
              } else {
                resolve(data)
              }
        })
    })
}

/**
 * Promises to return a complete list of members for dashboard view to display
 *
 * @return {*} 
 */
function getCorpMembers(){
    return new Promise((resolve, reject) => {
        getSSO()
        .then( sso => {
            return promiseCorpId(sso.character.id)
        })
        .then( corp_id => {
            return promiseRawCorpMembers(corp_id, sso)
        })
        .then( raw_members => {
            let members = []
            for(i in raw_members){
                members.push( promiseCharacterName(raw_members[i]) )
            }
            return Promise.all(members)
        })
        .then( members => {
            resolve(members)
        })
        .catch( e => { reject(e) })
    })
}

exports.promiseCorpMembers = getCorpMembers