(function(global, angular) {
  'use strict'

  var lazyWeather = angular.module('lazyWeather');

  lazyWeather.factory('convertDate', [function(){
    var week = 'Sun Mon Tues Wednes Thurs Fri Sat'.split(' ');
    return function(timestamp){
      if(!timestamp) {
        console.error('timestamp 값을 전달해야 합니다.');
      }
      var d = new Date( timestamp * 1000);
      var yyyy = d.getFullYear();
      var mm = d.getMonth()+1;
      mm = mm > 10 ? mm : '0' + mm;
      var dd = d.getDate() + 1;
      dd = dd > 10 ? dd : '0' + dd;
      var day = week[ d.getDay() ] + 'day';

      return {
        'yyyy_mm_dd': yyyy + '-' + mm + '-' + dd,
        'day': day
      };
    };
  }]);

})(this, this.angular);