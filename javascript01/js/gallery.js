var body = document.body;
var btn_group = query('div');
// console.log(btn_group);
// var btns = queryAll('button');
// console.log(btns);
var btn_1 = queryItem('button', body, 1);
var btn_2 = queryItem('button', body, 2);
var btn_3 = queryItem('button', body, 3);

// 문서_대상.이벤트 = 할일(함수);
// var changeBGColor = function() {
//   document.body.style.backgroundColor = this.firstChild.nodeValue;
  // return undefined;
// };
// changeBGColor(); // window

getComputedStyle(btn_1).backgroundImage

var changeBGImage = function() {
  document.body.style.backgroundImage = getComputedStyle(this).backgroundImage;
}

btn_1.onclick = changeBGImage;
btn_2.onclick = changeBGImage;
btn_3.onclick = changeBGImage;
