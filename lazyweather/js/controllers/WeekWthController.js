(function(global, angular) {
  'use strict';

  var lazyWeather = angular.module('lazyWeather');

  lazyWeather.factory('convertDate', [function(){
    var week = 'sun mon tues wednes thurs fri sat'.split(' ');
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

  lazyWeather.controller('WeekWthController', ['$http', 'convertDate', function($http, convertDate) {
    var lazyWeatherWeek = this;

    lazyWeatherWeek.weekWeather = [];

    $http({
      'method': 'GET',
      'url': 'http://api.openweathermap.org/data/2.5/forecast/daily?id=1835847&cnt=&APPID=b87a29cdc2db8cd57d8d8c85ca8c4fd8'
    }).then(successAjax, errorAjax);
    function successAjax(response) {
      lazyWeatherWeek.weekWeather = response.data;
      angular.forEach(response.data.list, function(item, index) {
        item.dt = convertDate(item.dt);
      });
    }
    function errorAjax(response) {
      console.error();
    }

  }]);

})(this, this.angular);