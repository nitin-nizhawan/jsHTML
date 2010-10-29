$ = function(nodeRef,props,children){
    nodeRef = (typeof(nodeRef)=="string")?document.getElementById(nodeRef):nodeRef;
    for(var x in props){
        nodeRef.setAttribute(x,props[x]);
    }
    for(var i in children){
        (function(child){
            child=(typeof(child)=="string"?document.createTextNode(child):child;
            nodeRef.appendChild(child);
        })(children[i]);
    }
    
}
$ce = function(_tn){
  return document.createElement(_tn);
}
$tn = function(_tn){
  return document.getElementsByTagName(_tn);
}
