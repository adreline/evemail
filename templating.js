function _constructNodeWithText(text, node){
    let nd = document.createElement(node)
    let tex_nd = document.createTextNode(text)
    nd.appendChild(tex_nd)
    return nd
}
function _constructNode(node){
    let nd = document.createElement(node)
    return nd
}

function constructNodes(nodes){
    let t = []
    for(i in nodes){
        let n = nodes[i]
        n = n.hasOwnProperty('text') ? _constructNodeWithText(n.text, n.type) : _constructNode(n.type)
        t.push( n )
    }
    return t
}

function constructRecyclables(prototype, data, parent){
    for(j in prototype){
        let batch = prototype[j]
        parent.appendChild(
            _constructNodeWithText( data[batch.key], batch.type )
        )
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
        //kocham cię kuśko
    }
    return source
}

function constructTableRow(characters, prot){
    let tr = _constructNode('tr')
    return constructRecyclables(prot, characters, tr)
}