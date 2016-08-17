var demo_box = query('.demo-box');

function movingBox(box, position, callback){
  if ( isntElNode(box) ) {
    errorMsg('should be element node');
  }

  position = position || { 'x': 0, 'y':0 };

  console.log(position);

  var current = {
    'x': box.offsetLeft,
    'y': box.offsetTop
  }
  
  console.log('distance x', position.x - current.x); 
  console.log('distance y', position.y - current.y); 

  box.style.left = position.x + 'px';
  box.style.top = position.y + 'px';

  callback = typeof callback === 'function' ? callback : function() {};

  callback()
}

demo_box.onclick = function() {
  movingBox(this, {
    'x': event.clientX,
    'y': event.clientY
  });
};




function  countDown(number) {
  if ( typeof number!= 'number') { throw new Error('input number.') }
  var _num = number;
  var _countDown = function() {
    console.log('_num:', _num--);
  };
  return _countDown;
}

var countDown10 = countDown(10);
