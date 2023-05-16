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
  

function renderTemplate(context){
    let body = context.template.body
    console.log(`[renderer.js] invoked renderTemplate`);
    console.log(context.circumstances);
    let pool = Object.assign({}, ...context.circumstances)
    let raw_tokens = [...body.matchAll(pattern_v)]
    let tokens = new Map()

    raw_tokens.forEach(token => {
        tokens.set(token[0], extractTag(token[0]))
    });

    for (const [raw_token, token] of tokens) {
        let val = fetch(pool, token)
        if(val !== undefined){
            console.log(`[renderer.js] ${token} = ${val}`);
            body = body.replaceAll(raw_token, val)
        }else{
            console.log(`[renderer.js] pool is missing a property ${token}`);
        }
    }
    context.template.body = body;
    return context;
}

exports.templatePattern = pattern;
exports.renderTemplate = renderTemplate;