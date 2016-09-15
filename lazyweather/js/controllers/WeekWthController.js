(function(global, angular) {
  'use strict';

  var lazyWeather = angular.module('lazyWeather');

  lazyWeather.controller('WeekWthController', ['$http', 'convertDate', 'convertIcon', function($http, convertDate, convertIcon) {
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
      angular.forEach(response.data.list, function(item, index) {
        item.weather[0].main = convertIcon(item.weather[0].main);
      });
    }
    function errorAjax(response) {
      console.error();
    }

  }]);

})(this, this.angular);