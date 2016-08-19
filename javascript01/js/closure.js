

(function(global){
  'use strict';

  // .button-set을 선택
  var button_set = query('.button-set');
  // .button-set [CONTEXT] 내부에서 .button 을 모두 수집 [NODELIST]
  var buttons = makeArray( queryAll('.button', button_set) );
  // console.log(buttons, isType( makeArray(buttons) ));
  // 수집된 [NODELIST]를 순환하여 (코드의 흐름 제어) 클릭 이벤트에 함수(이벤트 핸들러)를 연결한다.
  // for문 예시 -----------------------------------------------------------------
  for ( var button, i=0, l=buttons.length; i<l; i+=1 ) {
    button = buttons[i];
    // ------------------------------------------------------------------------
    // 예시 1) 버튼 객체의 속성을 추가하는 방법
    // 객체.속성을 추가하여 for문이 돌 때 마다 각 버튼 객체의 index 속성에 i 값을 할당한다.
    button.index = i;
    button.onclick = function() {
      // this 키워드 컨텍스트를 참조하는 변수
      // this를 사용하여 각 버튼 객체의 index 속성 값에 접근하여 출력한다.
      console.log(this.index);
    };
    // ------------------------------------------------------------------------
    // 예시 2) 자바스크립트 클로저를 사용하여 문제를 해결하는 방법
    // button.onclick = (function(index){
    //   return function() {
    //     console.log(index);
    //   };
    // })(i);
  }
  // forEach() 예시 ------------------------------------------------------------
  buttons.forEach(function(button, index, buttons){
    // arguments 함수 내부에서만 접근 가능한 매개변수(전달인자들을 묶어 놓은 집합 객체)
    // console.log(arguments); // 유사 배열 객체이다.
    // button.onclick = function() {
    //   console.log(index);
    // };
  });
  // 각 버튼을 사용자가 클릭할 경우, 자신의 순환 인덱스 숫자를 콘솔에 출력한다.

})(this);