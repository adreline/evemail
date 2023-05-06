const esi = require('../../esi/eve-esi')
const EventEmitter = require('events');
const { PostCharactersCharacterIdMailMail: Evemail } = require('../../esi/eve-esi')
const { getSSO } = require('../../sso.js');
const { queue } = require('async')

const evemailer = new esi.MailApi()

function substringbetween(haystack, a, b, offset_a = 0, offset_b = 0){
	return haystack.substring(
        haystack.indexOf(a) + a.length + offset_a, 
        haystack.lastIndexOf(b) - b.length + offset_b
    );
}


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
    return new Promise((resolve, reject) => {
        console.log(`[promiseToSend.js] sending to ${targets.length} recipients`);
        let task = new EventEmitter()
        let total = targets.length
        let current = 0

        let q = queue((target, callback) => {
            console.log(`[promiseToSend.js] sending to ${target.name}`);
            send( constructMail(template, [{ recipient_id: target.id, recipient_type: "character" }]) )
            .then(() => {
                console.log(`[promiseToSend.js] success sending to ${target.name}`);
                current++
                task.emit('mailer:progress', {current: current, total: total, recipient: target.name})
                callback()
            })
            .catch( e => {
                er = {
                    error: substringbetween(e.response.res.text, "error", "details", 3, 5),
                    details: JSON.parse(substringbetween(e.response.res.text, "details", "}", 2).replace(/\\/g, ''))
                }
                callback(er)
            })
        }, 5);

        q.error(function(err, target) {
            console.log(`[promiseToSend.js] failed sending to ${target.name}, ${err.error}`);
            task.emit('mailer:error', {recipient: target.name, error: err.error})
            if(!q.paused){
                console.log(`[promiseToSend.js] pausing queue for ${err.details.remainingTime}`);
                task.emit('mailer:pause', { time: Math.round(err.details.remainingTime * Math.pow(10, -7)) })
                q.pause()
                setTimeout(() => { 
                    console.log('[promiseToSend.js] queue will now resume');
                    task.emit('mailer:resume')
                    q.resume()
                 }, (err.details.remainingTime * Math.pow(10, -4)))
            }
            q.push(target)
        })

        q.drain(() => {
            console.log('[promiseToSend.js] the queue is drained');
            task.emit('mailer:done')
        })
        
        task.once('mailer:ready', ()=>{
            console.log('[promiseToSend.js] mailer ready, pushing tasks');
            setTimeout(() => { 
                task.emit('mailer:begin')
                q.push(targets) 
            }, 300)
            
        })
        resolve(task)
    })
}

exports.sendEvemails = sendEvemails