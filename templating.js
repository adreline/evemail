function _constructNodeWithText(text, node){
    let nd = document.createElement(node)
    let tex_nd = document.createTextNode(text)
    nd.appendChild(tex_nd)
    return nd
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

    return nd
}

function constructNodes(nodes){
    let t = []
    for(i in nodes){
        let n = nodes[i]
        n = n.hasOwnProperty('text') ? _constructNodeWithText(n.text, n.tag) : _constructNode(n.tag)
        t.push( n )
    }
    return t
}

function constructRecyclables(prototype, data, parent){
    for(j in prototype){
        let batch = prototype[j]
        let node = batch.hasOwnProperty('key') ? _constructNodeWithText( data[batch.key], batch.tag ) : _constructNode(batch)
        parent.appendChild( node )
    }
    return parent
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