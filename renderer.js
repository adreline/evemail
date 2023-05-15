const pattern = /(\{\{\s?\w+\s?\}\})|(\{\%\s?[\w\s]+\s?\%\})/gm;
const pattern_v = /(\{\{\s?\w+\s?\}\})/gm;
const pattern_t = /(\{\%\s?[\w\s]+\s?\%\})/gm;

function extractTag(raw){
    return raw.replaceAll("{{","").replaceAll("}}","").replaceAll("%","").trim()
}

function fetch(pool, needle){
    let findling;
    for (const [key, value] of Object.entries(pool)){
        return findling = value.hasOwnProperty(needle) ? value[needle] : fetch(pool[key], needle);
    }
    return findling;
}

function renderTemplate(context){
    let body = context.template.body
    console.log(`[renderer.js] invoked renderTemplate`);
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