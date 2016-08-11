var parent_el = document.getElementById('parent');
var parent_el_child_nodes = parent_el.childNodes;

console.log(parent_el_child_nodes);
console.log('수집된 parent_el의 자식 노드의 개수:', parent_el_child_nodes.length);

for ( var i=0; i<9; i=i+1 ) {
  if ( parent_el_child_nodes[i].nodeType === 1 ) {
    parent_el_child_el = parent_el_child_nodes[i];
    break;
  } else {
  }
}

var parent_el_child_el;
var test_list = parent_el_child_el.childNodes;
var test_list_len = test_list.length;

for ( var node_type, k = 0; k<test_list_len; k=k+1 ) {
  node_type = test_list[k].nodeType;
  if ( node_type === 1 ) {
    console.log('%c current node is Element_Node.', 'color: #cdcdcd');
  }
  if ( node_type === 3 ) {
    console.log('current node is TEXT_NODE.');
  }
  if (node_type === 0 ) {
    console.log('current node is Comment.Node.');
  }
}

console.log('parent_el 요소노드의 id 속성', parent_el.id);
console.log('parent_el 요소노드의 id 속성', parent_el.className);
console.log('parent_el 요소노드의 id 속성', parent_el.title);

console.log('parent_el.data-container:', parent_el.getAttribute('data-container'));
console.log('parent_el.role:', parent_el.getAttribute('role'));
console.log('parent_el.aria-hidden:', parent_el.getAttribute('aria-hidden'));

var parent = document.getElementById('parent');

var parent_childs = parent.getElementsByTagName('div');

for(var child, i=0, l=parent_childs.length; i<l; i=i+1) {
  child = parent_childs[i];
  if ( !child.hasChildNodes() ) {
    console.log(child);
  }
}


var childs = document.getElementsByClassName('child');
console.log(childs, childs.length);


console.log(document.querySelector('#parent > .chid:nth-child(3)'));

var made_division = document.createElement('div');
var made_division_text = document.createTextNode('this is division');


var made_unordered_list = document.createElement('ul');
var made_unordered_list_item = document.createElement('li');
var made_unordered_list_item_text = document.createTextNode('list items');

console.log('div:', made_division);
console.log('div_text:', made_division_text)

console.log('ul:', made_unordered_list);
console.log('ul > li:', made_unordered_list_item);
console.log('ul >li_text:', made_unordered_list_item_text);

var target_place = document.querySelector('#parent > .child:last-child');

target_place.appendChild(made_division);

made_unordered_list.appendChild(made_unordered_list_item);
made_unordered_list_item.appendChild(made_unordered_list_item_text);

var target_container = document.createElement('div');
target_container.appendChild(made_unordered_list);
document.body.appendChild(target_container);



var target = document.body.firstChild;

target.parentNode.insertBefore(target_container, target);

// function prependChild() {
//   var target_location = document.createElement('div');
//   this.parentNode.insertBefore(target_location, this);
// };


// for ( var i=0; i<5; i=i+1 ) {
//   if ( parent_el_child_nodes[i].hasChildNodes()) {
//     console.log('has child nodes')
//   } else {
//     console.log('has no child nodes', parent_el_child_nodes);
//   }
// }

var target_container = document.createElement('div');
// setAttribute(attribute, value);
target_container.setAttribute('id', 'target-container');
target_container.appendChild(maked_unordered_list);
// document.body.appendChild(target_container);

var body = document.body;

// body.insertBefore(target_container, target);


// 가능한 청년들이여! 아래 헬퍼 함수를 만들지어다.
function prependChild(child_node, parent_node) {
  parent_node.insertBefore(child_node, parent_node.firstChild);
}

prependChild(target_container, body);



function insertAfter(insert_node, target_node) {
  var next_node = target_node.nextSibling;
  var parent_node = next_node.parentNode;
  if ( next_node ) { 
    parent_node.insertBefore(insert_node, next_node); 
  } 
  else {
    parent_node.appendChild(insert_node);
  }
}

insertAfter(insert, target_parent);






