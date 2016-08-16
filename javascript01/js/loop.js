var boo = true, m = 10;

while(boo) {
  console.log(boo ? '참참참!' : '짝짝짝!');
  // if (--m > 0) { // 9,8,7,6,5,4,3,2,1
  if (m-- > 0) { // 10,9,8,7,6,5,4,3,2,1
    boo = !boo;
  }
}

// ECMAScript 2015 Syntax
var cleanWhiteSpace = ( el=document ) => {
    var current_node = el.firstChild;
    while( current_node ) {
      if ( current_node.nodeType === 3 && /\s/.test(current_node.nodeValue) ) {
          remove(current_node);
      } else if ( current_node.nodeType === 1 ) {
          cleanWhiteSpace(current_node);
      }
      current_node = current_node.nextSibling;
    }
};

var fruits = ['banana', true, 'strawberry', false, 'grape', null, 'watermelon'];
fruits.push(function(){});
fruits.push({'name': 'object'})


var real_fruits = [],
    fruit,
    k = 0
    o = fruits.length;

for ( ; k<o; k=k+1 ) {
  fruit = fruits[k];
  if( isType(fruit) !== 'string') {
    continue;
  }
  real_fruits.push(fruit);
}

console.log(real_fruits);

var collection = document

function isElName(node, name) {
  if ( isntElNode(node) ) { errorMsg('element node needs to be passed on to first element.')}
  if ( isType(name) !== 'string') { errorMsg('as a text node, element needs to be passed onto second element.')}
  return (node.localName || node.nodeName.toLowerCase()) === name;
}

for ( var el_collection=[], i = collection.length - 1; collection[i]; i-- ) {
  let node = collection[i];
  if( isTextNode(node) || isElName(node, 'script')) {
    continue;
  }
  el_collection.push(node);

  console.log(el_collection);
}

