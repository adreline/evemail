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