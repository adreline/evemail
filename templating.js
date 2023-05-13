function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

function _constructNode(node){
    let nd = document.createElement(node.tag)
    if(node.hasOwnProperty('class')) nd.classList.add(...node.class)
    if(node.hasOwnProperty('id')) nd.id = node.id
    if(node.hasOwnProperty('name')) nd.setAttribute('name', node.name)
    if(node.hasOwnProperty('src')) nd.setAttribute('src', node.src)
    if(node.hasOwnProperty('href')) nd.setAttribute('href', node.href)
    if(node.hasOwnProperty('type')) nd.setAttribute('type', node.type)
    if(node.hasOwnProperty('value')) nd.setAttribute('value', node.value)
    if(node.hasOwnProperty('text')) nd.appendChild(document.createTextNode(node.text))

    return nd
}

function constructTextPreview(text, parent){
    let lines = text.split("\n");
    for( i in lines){
        parent.appendChild( document.createTextNode(lines[i]) )
        parent.appendChild( document.createElement('br') )
    }
    return parent
}

function constructRecyclables(prototype, data = {}, parent = undefined){
    let root = undefined
    for(j in prototype){
        let batch = prototype[j]
        if(batch.hasOwnProperty('key')) batch.text = data[batch.key]
        let node = _constructNode(batch)
        if(parent === undefined && root === undefined) root = node
        if(batch.hasOwnProperty('children')){
            constructRecyclables(batch.children, data, node)
        }
        if(parent !== undefined) parent.appendChild( node )
    }
    return parent === undefined ? root : parent
}

function localiseDates(keys, source){
    for( i in source ){
        let o = source[i]
        for(j in keys){
            let key = keys[j]
            let dt = new Date(o[key])
            o[key] = dt.toLocaleString()
        }
        source[i] = o
    }
    return source
}

function constructTableRow(characters, prot){
    let tr = _constructNode({tag: 'tr'})
    return constructRecyclables(prot, characters, tr)
}

function constructLog(label, text){
    let prototype = [
        { tag: 'p', class: [`has-text-${label}`], children: [
            { tag: 'time', text: `[${new Date().toLocaleString()}]` },
            { tag: 'span', text: ` ${text}` }
        ]}
    ]
    return constructRecyclables(prototype)
}