(function(global, angular) {
  'use strict';

  var lazyWeather = angular.module('lazyWeather');

  lazyWeather.controller('CurrentWthController', ['$http', 'convertDate', 'convertIcon', function($http, convertDate, convertIcon) {
    var lazyWeatherCurrent = this;

    lazyWeatherCurrent.currentWeather = [];

    $http({
      'method': 'GET',
      'url': 'http://api.openweathermap.org/data/2.5/weather?id=1835847&APPID=b87a29cdc2db8cd57d8d8c85ca8c4fd8'
    }).then(successAjax, errorAjax);
    function successAjax(response) {
      lazyWeatherCurrent.currentWeather = response.data;
      response.data.dt = new Date();
      response.data.weather[0].main = convertIcon(response.data.weather[0].main);
    }
    function errorAjax(response) {
      console.log()
    }

  }]);

})(this, this.angular);

