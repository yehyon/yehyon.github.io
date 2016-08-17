var new_movielist;

console.log('hoisting', new_movielist);


var movielist = [];

movielist.push('tunnel');
movielist.push('princess');
movielist.push('station');
movielist.push('station2');

console.log(movielist);

for ( var i=0, l=movielist.length; i<l; i+=1 ){
  console.log(movielist[i]);
}

for ( var movie of movielist ) {
  console.log(movie);
}

for ( var index in movielist ) {
  if( movielist.hasOwnProperty(index)) {
    console.log(movielist[index]);
  }
}

movielist.forEach(function(item, index, arr) {
  console.log('item:', item);
  console.log('index:', index);
  console.log('arr:', arr);
})

movielist.forEach(function(item, idx) {
  console.log('item '+ idx +': ', item);
});

movielist.map(function(item, index, arr) {
  console.log('item' + index + ':', item);
  if ( index === movielist.length - 1 ) {
    console.log( 'arr:', arr );
  };
})



new_movielist = movielist.map(function(item, index, arr) {
  return item + 'is ' + index + 'st element.';
});


console.log('hoisting2', new_movielist);

function showMe() {
  console.log(this);
  return this;
}

showMe() === window;

var fds = {
  'callMe': showMe
};

fds.callMe() === fds;






