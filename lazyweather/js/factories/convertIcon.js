(function(global, angualr) {

  'use strict'

  var lazyWeather = angular.module('lazyWeather');

  lazyWeather.factory('convertIcon', [function(){
    return function(weatherdescription){
      if(!weatherdescription) {
        console.error('need weatherdescription to assign icon.');
      } if (weatherdescription == 'Clear') {
        weatherdescription = 'A';
      } if (weatherdescription == 'Clouds') {
        weatherdescription = 'C';
      } if (weatherdescription == 'Rain') {
        weatherdescription = 'R';
      } if (weatherdescription == 'Haze') {
        weatherdescription = 'O';
      } if (weatherdescription == 'Mist') {
        weatherdescription = 'E';
      }
      return {
        'weathericon': weatherdescription
      }
    };
  }])

})(this, this.angular);