const esi = require('../../esi/eve-esi')
const { PostCharactersCharacterIdMailMail: Evemail } = require('../../esi/eve-esi')
const { getSSO } = require('../../sso.js');

const evemailer = new esi.MailApi()

function send(mail){
    return new Promise((resolve, reject) => {
        getSSO()
        .then((sso) => {
            evemailer.postCharactersCharacterIdMail(sso.character.id, mail, { 'datasource': "tranquility", 'token': sso.access_token }, (error, data, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data)
                }
            })
        })
        .catch( e => { reject(e) })
    })
}

function constructMail(template, to){
    let body = template.body
    let subject = template.subject
    return new Evemail(body, to, subject)
}

function sendEvemails(targets, template){
    console.log(`[promiseToSend.js] sending to ${targets.length} recipients`);
    targets.forEach( target => {
        console.log(`[promiseToSend.js] sending to ${target.name}`);
        send( constructMail(template, target.id) )
        .then(() => {
            console.log(`[promiseToSend.js] success sending to ${target.name}`);
        })
        .catch( e => {
            console.log(`[promiseToSend.js] failed sending to ${target.name}`);
            console.log(e);
        })
    })
}

exports.sendEvemails = sendEvemails