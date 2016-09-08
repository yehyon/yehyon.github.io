(function(global){
  'use strict';

  ///////////////
  // Detectizr //
  ///////////////
  global.Detectizr.detect();

})(this);

(function(global, $, SM){
  'use strict';

  /////////////////
  // ScrollMagic //
  /////////////////

  // ScrollMagic은 그냥 함수에 불과 네임스페이스 객체
  // console.log(SM);

  // Controller 객체 설정
  var ctrl = new SM.Controller();
  // Scene 객체 설정

  var scene_list = '.rectangle, .square'.split(', ');

  scene_list.forEach(function(trigger_el_selector, idx) {
    var scene = new SM.Scene({
      'triggerElement': trigger_el_selector,
      'triggerHook': 0,
      'offset': -500,
    })
    .setClassToggle(trigger_el_selector, 'fade-in')
    .addIndicators({
      'name': trigger_el_selector
    })
    .addTo(ctrl);
  });


})(this, this.jQuery, this.ScrollMagic);