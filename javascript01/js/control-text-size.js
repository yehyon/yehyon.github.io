//Variables
var page_header = query('.page-header')
var increase_btn = query('.btn-increase-text');
var decrease_btn = query('.btn-decrease-text');
var change_text = 5;
var limit_up = 40;
var limit_down = 12;

//Validation
console.log('page_header:', page_header);
console.log('increase_btn:', increase_btn);
console.log('decrease_btn:', decrease_btn);

page_header.style.fontSize = '16px';

//Event Handling
// increase_btn.onclick = function() {
//   //Increase header font size
//   let current_size = parseInt(page_header.style.fontSize);
//   page_header.style.fontSize = current_size + 5 + 'px';
//   console.log(page_header.style.fontSize)
// }

// decrease_btn.onclick = function() {
//   //Decrease header font size
//   let current_size = parseInt(page_header.style.fontSize);
//   page_header.style.fontSize = current_size + -5 + 'px';
//   console.log(page_header.style.fontSize)
// }


function changeTextSize() {
  var operator = this.innerHTML
  var current_size = parseInt(page_header.style.fontSize);
  var _change_text = change_text
  if (current_size <= 40 && current_size>= 12) {
  if (operator === '-') {
    _change_text = change_text * -1;
  }

  page_header.style.fontSize = current_size + _change_text + 'px';
  console.log(page_header.style.fontSize);
}

}

increase_btn.onclick = changeTextSize
decrease_btn.onclick = changeTextSize


function getStyle(el, property) {
  var value;
  if(window.getComputedStyle) {
    value = window.j
  }
}