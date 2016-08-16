var boo = true, m = 10;

while(boo) {
  console.log(boo ? 'true!' : 'clap!');

  if (m-- > 0) {
    boo = !boo;
  }
}


function errorMsg(message) {
  if ( isType(message) !== 'string' ){
    errorMsg('error message needs to be a string type.')
  }
  throw new Error(message);
}

function prevEl(el_node) {
  if ( el_node.nodeType !== 1 ) {
    errorMsg('sent node needs to be an element node.')
  }
}

