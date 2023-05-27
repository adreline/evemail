const { promiseTemplates, promiseTemplate } = require(`${global.root}/controller/Templates/crudTemplates.js`)

const pattern = /(\{\{\s?\w+\s?\}\})|(\{\%\s?[\w\s]+\s?\%\})/gm;
const pattern_v = /(\{\{\s?\w+\s?\}\})/gm;
const pattern_t = /(\{\%\s?[\w\s]+\s?\%\})/gm;

function extractTag(raw){
    return raw.replaceAll("{{","").replaceAll("}}","").replaceAll("%","").trim()
}

function fetch(pool, needle) {

    // Base case
    if (pool.hasOwnProperty(needle)) {
      return pool[needle];
    } else {
      var keys = Object.keys(pool); // add this line to iterate over the keys
  
      for (var i = 0, len = keys.length; i < len; i++) {
        var k = keys[i]; // use this key for iteration, instead of index "i"
  
        // add "obj[k] &&" to ignore null values
        if (pool[k] && typeof pool[k] == 'object') {
          var found = fetch(pool[k], needle);
          if (found) {
            // If the object was found in the recursive call, bubble it up.
            return found;
          }
        }
      }
    }
  }
  
  function fetchVal(pool, needle){
    Array.from(pool).forEach(template => {
      if(template.subject == needle){
        return template
      }
    })
    return undefined
  }

function renderTemplate(context){

  let body = context.template.body
    console.log(`[renderer.js] invoked renderTemplate`);
    // Replacing variables
    if(pattern_v.test(body)){
      let pool = Object.assign({}, ...context.circumstances)
      body = swapTokens(body, pattern_v, (raw_token, token, body)=>{
          let val = fetch(pool, token);
          if (val !== undefined) {
            console.log(`[renderer.js] ${raw_token}/${token} = ${val}`);
            body = body.replaceAll(raw_token, val);
          } else {
            console.log(`[renderer.js] pool is missing a property ${token}`);
          }
          return body
      });
    }

    // Replacing embedded templates
    if(pattern_t.test(body)){
      let db = promiseTemplates(true)
      body = swapTokens(body, pattern_t, (raw_token, token, body) => {
        let t = fetchVal(db.templates, token)
        if (val !== undefined) {
          console.log(`[renderer.js] ${raw_token}/${token} = ok`);
          body = body.replaceAll(raw_token, t.body);
        } else {
          console.log(`[renderer.js] template not found ${token}`);
        }
        return body
      })

    }
      context.template.body = body;
      return context;  
    

  }

function swapTokens(body, pattern, callback) {
  let raw_tokens = [...body.matchAll(pattern)];
  let tokens = new Map();

  raw_tokens.forEach(token => {
    tokens.set(token[0], extractTag(token[0]));
  });

  for (const [raw_token, token] of tokens) {
   body = callback(raw_token, token, body)
  }
  return body;
}

exports.templatePattern = pattern;
exports.renderTemplate = renderTemplate;