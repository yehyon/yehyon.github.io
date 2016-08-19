/*! DOMHelper.js © yamoo9.net, 2016 */

function cleanWhilteSpace(el) {
    el = el || document;
    var current_node = el.firstChild;
    while( current_node ) {
      if ( current_node.nodeType === 3 && !/\S/.test(current_node.nodeValue) ) {
          removeNode(current_node);
      } else if ( current_node.nodeType === 1 ) {
          cleanWhiteSpace(current_node);
      }
      current_node = current_node.nextSibling;
    }
};


// 자바스크립트의 모든 데이터 유형을 올바르게 감지할 수 있는 헬퍼 함수
function isType(data) {
   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

// 데이터 간 동등한지 유무 파악 헬퍼 함수
function equal(data1, data2) {
   return data1 == data2;
}

// 데이터 간 완전하게 동등한지 유무 파악 헬퍼 함수
function strictEqual(data1, data2) {
   return data1 === data2;
}

function throwError(type1, type2, err_msg) {
  err_msg = err_msg || '기본 오류 메시지';
  if ( isType(type1) !== type2 ) { throw new Error(err_msg); }
}

function validDate(data, type) {
  throwError(type, 'string'); // 오류 발생 시 멈추고 화면에 오류 메시지 출력
  return strictEqual( isType(data), type );
}


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

// 문서 객체(노드)를 제거하는 헬퍼 함수
function removeNode(node) {
  node.parentNode.removeChild(node);
}

// createElement(), createTextNode()
// 2가지 일을 동시에 수행하는 헬퍼 함수
// "요소노드를 생성한 다음 내부에 텍스트노드를 자식 노드로 삽입"
function createNode(el_name, text) {
  var el_node = document.createElement(el_name);
  if ( typeof text !== 'undefined' && typeof text === 'string' ) {
    var text_node = document.createTextNode(text);
    el_node.appendChild(text_node);
  }
  return el_node;
}


//Retreiving CSS Style
// function getStyle(el, property, pseudo) {
//   var value, el_style;
//   // 유효성 검사
//   if ( el.nodeType !== 1 ) {
//     console.error('첫번째 인자 el은 요소노드여야 합니다.');
//   }
//   if ( typeof property !== 'string' ) {
//     console.error('두번째 인자 property는 문자열이야 합니다.');
//   }
//   if ( pseudo && typeof pseudo !== 'string' ) {
//     console.error('세번째 인자 pseudo는 문자열이야 합니다.');
//   }

 // CSS 속성 이름이 카멜케이스화
  // property = camelCase(property);

//   if ( window.getComputedStyle ) {
//     el_style = window.getComputedStyle(el,pseudo);
//     if (pseudo && el_style.content === '') {
//       return null;
//     }
//     value = el_style[property];
//   } else {
//     value = el.currentStyle[property];
//   }
//   return value;
// }

// ------------------------------------------------
// 전달된 텍스트를 카멜케이스화하여 반환하는 헬퍼 함수
function camelCase(text) {
   return text.replace(/(\s|-|_)./g, function($1){
      return $1.replace(/(\s|-|_)/g,'').toUpperCase();
   });
}
// ------------------------------------------------
// 오류 메시지를 출력하는 헬퍼 함수
function errorMsg(message) {
  if ( isType(message) !== 'string' ) {
    // 함수 자신을 다시 호출: 재귀함수
    errorMsg('오류 메시지는 문자 데이터 유형이어야 합니다.');
  }
  throw new Error(message);
}

// ------------------------------------------------
// 요소노드인지 아닌지를 체크하여 참/거짓을 반환하는 헬퍼함수
function isElNode(node) {
  return node.nodeType === 1;
}
function isntElNode(node) {
  return !isElNode(node);
  // return node.nodeType !== 1;
}

// ------------------------------------------------
// 이전 형제요소 노드를 찾는 헬퍼 함수
function prevEl(node) {
  // 검증: 유효성 검사
  if ( isntElNode(node) ) {
    errorMsg('전달된 인자는 요소노드여야 합니다.');
  }
  // 구형 IE 9+, 신형 웹 브라우저
  if ( node.previousElementSibling ) {
    return node.previousElementSibling;
  }
  // 구형 IE 6-8
  else {
    do { node = node.previousSibling; }
    while(node && !isElNode(node) );
    return node;
  }
}

// ------------------------------------------------
// 다음 형제요소 노드를 찾는 헬퍼 함수
function nextEl(node) {
  // 검증: 유효성 검사
  // if ( isntElNode(node) ) {
  //   errorMsg('전달된 인자는 요소노드여야 합니다.');
  // }
  // 구형 IE 9+, 신형 웹 브라우저
  if ( node.nextElementSibling ) {
    return node.nextElementSibling;
  }
  // 구형 IE 6-8
  else {
    do { node = node.nextSibling; }
    while(node && !isElNode(node) );
    return node;
  }
}

// ------------------------------------------------
// 첫번째 자식요소 노드를 찾는 헬퍼 함수
function firstEl(node) {
  if ( isntElNode(node) ) { errorMsg('요소노드를 전달해야 합니다.'); }
  if ( node.firstElementChild ) {
    return node.firstElementChild;
  } else {
    node = node.firstChild;
    return ( node && isntElNode(node) ) ? nextEl(node) : node;
  }
}
// 마지막 자식요소 노드를 찾는 헬퍼 함수
function lastEl(node) {
  if ( isntElNode(node) ) { errorMsg('요소노드를 전달해야 합니다.'); }
  if ( node.lastElementChild ) {
    return node.lastElementChild;
  } else {
    node = node.lastChild;
    return ( node && isntElNode(node) ) ? prevEl(node) : node;
  }
}
// 목적에 도달하는 쉬운 헬퍼 함수
function _firstEl(node) {
  return node.children[0];
}
function _lastEl(node) {
  var children = node.children;
  return children[children.length - 1];
}


var units = 'px em rem % vw vh vmin vmax'.split(' ');;
var unit;
var i = 0;
var l = units.length;

// var demo_container = query('.demo-container');
// var get_value = getStyle(demo_container, 'margin-bottom');

// console.log(get_value);

function getUnit(value) {
  var i=0, l=getUnit.units.length,unit;
  var reg;
  for ( ; i<l; i++ ) {
    unit = getUnit.units[i];
    if ( value.indexOf(unit) > -1) {
      return unit;
    }
  }
  return null;
}
getUnit.units = 'px rem em % vw vh vmin vmax'.split(' ');


function removeUnit(value) {
removeUnit.unit = getUnit(value)
return value.split(getUnit(value))[0]
}

function makeArray(data) {
  // 전달된 객체는 배열 또는 유사 배열인가?
  var check_data = isType(data), result_arr = [], len = data.length;
  // 실제 배열
  if (check_data === 'array') {
    return data;
  }
  // 유사 배열
  if ( len && check_data !== 'string' ) {
    while( len-- ) {
      result_arr.push( data[len] );
    }
  }
  return result_arr.reverse();
}




