const esi = require(`${global.root}/esi/eve-esi`)
const EventEmitter = require('events');
const { PostCharactersCharacterIdMailMail: Evemail } = require(`${global.root}/esi/eve-esi`)
const { getSSO } = require(`${global.root}/sso.js`);
const { queue } = require('async')
const { renderTemplate } = require(`${global.root}/renderer.js`);

const evemailer = new esi.MailApi()
/**
 * Gets a substring between two tokens
 *
 * @param {string} haystack
 * @param {string} a
 * @param {string} b
 * @param {number} [offset_a=0]
 * @param {number} [offset_b=0]
 * @return {string} 
 */
function substringbetween(haystack, a, b, offset_a = 0, offset_b = 0){
	return haystack.substring(
        haystack.indexOf(a) + a.length + offset_a, 
        haystack.lastIndexOf(b) - b.length + offset_b
    );
}

/**
 * Sends a single evemail
 *
 * @param {Object} mail
 * @return {Promise} 
 */
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
/**
 * Shorthand for constructing evemail objects, as described in ESI
 *
 * @param {Object} template
 * @param {Array} to
 * @return {Evemail} 
 */
function constructMail(template, target){
    let context = renderTemplate({
        template: global.clone(template),
        circumstances: [
            [target]
        ]
    })
    let body = context.template.body
    let subject = context.template.subject
    let to = [{ recipient_id: target.characterId, recipient_type: "character" }]
    return new Evemail(body, to, subject)
}
/**
 * Executes and sends a batch of evemails
 * 
 * uses async queue for flow controll
 * Resolves to an event emmiter, which will receive queue events
 * @param {Array} targets
 * @param {Object} template
 * @return {Promise} 
 */
function sendEvemails(targets, template){
    return new Promise((resolve, reject) => {
        console.log(`[promiseToSend.js] sending to ${targets.length} recipients`);
        let task = new EventEmitter()
        let total = targets.length
        let current = 0

        let q = queue((target, callback) => {
            console.log(`[promiseToSend.js] sending to ${target.characterName}`);
            send( constructMail(template, target) )
            .then(() => {
                console.log(`[promiseToSend.js] success sending to ${target.characterName}`);
                current++
                task.emit('mailer:progress', {current: current, total: total, recipient: target.characterName})
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
            console.log(`[promiseToSend.js] failed sending to ${target.characterName}, ${err.error}`);
            task.emit('mailer:error', {recipient: target.characterName, error: err.error})
            if(!q.paused){
                console.log(`[promiseToSend.js] pausing queue for ${err.details.remainingTime}`);
                task.emit('mailer:pause', { time: Math.round(err.details.remainingTime * Math.pow(10, -7)) })
                q.pause()
                //ESI sends the remaining timeout in (more or less) microseconds 
                setTimeout(() => { 
                    console.log('[promiseToSend.js] queue will now resume');
                    task.emit('mailer:resume')
                    q.resume()
                 }, (err.details.remainingTime * Math.pow(10, -4)))
            }
            q.push(target) //once one element of the batch fails to send, all of them will (because of how queue pausing works)
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
            }, 300) // timeout allows the ui to load
            
        })
        resolve(task)
    })
}

exports.sendEvemails = sendEvemails