// -make buttons (one for create moda, one for close modal)  
// -select button
// -select target area where modal will be created
// -create state for button
// -declare onclick
// -when clicked button will create modal at the targeted area
// -select other button
// -when second button is clicked, button will strip off the change of state occured by the first button

/*! make-remove-modal.js © yamoo9.net, 2016 */

var body            = document.body;
var exist_modal     = false;
var scripts_in_body = queryAll('script');
var last_script     = scripts_in_body[scripts_in_body.length - 1];
var make_btn        = query('.btn_make_modal');

function makeModal() {
  if (!exist_modal) {
    var modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    var modal_title = document.createElement('h2');
    var modal_title_txt = document.createTextNode('Modal Window');
    modal_title.setAttribute('class', 'modal-title');
    modal_title.appendChild(modal_title_txt);
    var modal_desc = document.createElement('p');
    var modal_desc_txt = document.createTextNode('Modal Window Content....');
    modal_desc.setAttribute('class', 'modal-desc');
    modal_desc.appendChild(modal_desc_txt);
    var btn_modal_cta = document.createElement('button');
    var btn_modal_cta_txt = document.createTextNode('send message');
    btn_modal_cta.setAttribute('class', 'modal-cta');
    btn_modal_cta.setAttribute('type', 'button');
    btn_modal_cta.appendChild(btn_modal_cta_txt);
    var btn_modal_close = document.createElement('button');
    var btn_modal_close_txt = document.createTextNode('x');
    btn_modal_close.setAttribute('class', 'modal-close');
    btn_modal_close.setAttribute('type', 'button');
    btn_modal_close.setAttribute('aria-label', 'close modal window');
    btn_modal_close.appendChild(btn_modal_close_txt);
    btn_modal_close.onclick = removeModal;
    modal.appendChild( modal_title );
    modal.appendChild( modal_desc );
    modal.appendChild( btn_modal_cta );
    modal.appendChild( btn_modal_close );
    insertAfter(last_script, modal);
    // 상태 변경
    exist_modal = !exist_modal;
    this.setAttribute('disabled', true);
  }
}

function removeNode(node) {
  node.parentNode.removeChild(node);
}

function removeModal() {
  var modal = query('.modal');
  removeNode(modal)
  exist_modal = !exist_modal;
  make_btn.removeAttribute('disabled');
}

function createNode(el_name, text) {
  var el_node = document.createElement(el_name);
  var text_node = document.createTextNode(text);
  el_node.appendChild(text_node);
  return el_node;
}

var replace_p = createNode('p', 'replaced paragraph.');
// body.replaceChild(replace_p, body.children[0]);

var clone_replace_p = replace_p.cloneNode();
var deep_clone_replace_p = replace_p.cloneNode(true);

// console.log('standard cloneing:', clone_replace_p);
// console.log('deep cloneing:', deep_clone_replace_p);

// for (var i=0; i<10; i++) {
//   prependChild(body, deep_clone_replace_p);
// }

// prependChild(body, deep_clone_replace_p);

function changePositionNodes(moving_node, target_node) {
  var next_node = moving_node.nextSibling;
  var parent_node = moving_node.parentNode;
  var removed_node = target_node.parentNode.replaceChild(moving_node, target_node)
  if (next_node) {
    next_node.parentNode.insertBefore(removed_node, next_node);
  }
  else if (parent_node) {
    parent_node.appendChild(removed_node);
  }
  else {
    return removed_node;
  }
}

function changeNodePositions(moving_node, target_node) {
  if(moving_node.parentNode) {
    insertAfter(moving_node,target_node);
  }
  return target_node.parentNode.replaceChild(moving_node, target_node);
}


make_btn.onclick = makeModal;

function fReplaceNode(target_1, target_2) {
    if(target_1.parentNode) {
        var temp = target_2.cloneNode(true);
        fInsertAfter(target_1, temp);
    }
    target_2.parentNode.replaceChild(target_1, target_2);
}
