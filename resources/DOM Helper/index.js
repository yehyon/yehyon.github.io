/*! DOMHelper.js © yamoo9.net, 2016 */

/**
 * prependChild(부모노드, 자식노드)
 * 부모노드의 첫번째 자식노드로 삽입한다.
 * ---------------------------------------------
 * @작성자    yamoo9
 * @버전     0.0.1
 * @param  {ELEMENT_NODE}  parent_node 부모노드
 * @param  {ELEMENT_NODE}  child_node  자식노드
 * @return {undefined}
 */
function prependChild(parent_node, child_node) {
  parent_node.insertBefore(child_node, parent_node.firstChild);
}

/**
 * insertAfter(목표노드, 삽입노드)
 * 목표노드 뒤에 삽입노드를 추가한다.
 * ---------------------------------------------
 * @작성자    yamoo9
 * @버전     0.0.1
 * @param  {ELEMENT_NODE}  target_node  목표노드
 * @param  {ELEMENT_NODE}  insert_node  삽입노드
 * @return {undefined}
 */
function insertAfter(target_node, insert_node) {
  var next_node = target_node.nextSibling;
  var parent_node = target_node.parentNode;
  if ( next_node ) { parent_node.insertBefore(insert_node, next_node); }
  else { parent_node.appendChild(insert_node); }
};



function queryAll(selector, context) {
  // var context; // unfined
  // 유효성 검사
  // 문자 데이터인지 확인
  if ( typeof selector !== 'string' ) { throw new Error('전달인자는 문자열만 가능합니다.'); }
  if ( !context ) { context = document; }
  return context.querySelectorAll(selector);
};

function query(selector, context) {
  return queryAll(selector, context)[0];
};

function queryItem(selector, context, order) {
  if (!order) { order = 1 }
  //second part of if statement is to have the function select an item even when undefined by default
  //order needs to begin from 1 in order to prevent error happening due to 0 being falsy in an if statement
  return queryAll(selector, context)[order-1];
};

function $q(selector, parent, order) {
  // 초기화
  // order = order || '';
  if ( !order ) {
    return queryAll(selector, parent);
  } else {
    return queryItem(selector, parent, order);
  }
};


//Retreiving CSS Style
function getStyle(el, property, pseudo) {
  var value, el_style;
  if (el.nodeType != 1 ) {
    console.error('first variable property needs to be an element node');
  }
  if ( typeof property != 'string') {
    console.error('second variable property needs to be a string');
  }
  if (typeof pseudo != 'string' && pseudo) {
    console.error('third variable pseudo needs to be a string');
  }
  if (window.getComputedStyle) {
    value = window.getComputedStyle(el,'')[property]
  } else {
    value = el.currentStyle[property]
  }
  return value;
}

//Switching hyphenated-text to camelCase
function camelCase(css_prop) {
  return css_prop.replace(/-./g, function($1){
    return $1.replace('-', '').toUpperCase();
  });
}

function isType(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

function equal(data1, data2) {
  return data1 == data2;
}

function strictEqual(data1, data2) {
  return data1 === data2;
}

function throwError(type1, type2, err_msg) {
  err_msg = err_msg || 'defaut error message';
  if ( isType(type1) != type2 ) { throw new Error(err_msg);}
}

// function validateData(data, type) {
//   if ( isType(true)) {}
// }


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














