(function(global, angular) {
  'use strict';
  // var apiKey = b87a29cdc2db8cd57d8d8c85ca8c4fd8

  var lazyWeather = angular.module('lazyWeather', []);

  lazyWeather.controller('todayWeatherController', function(){
    this.todayWeather = todayData;
  });

  var todayData = {
    time: '2AM',
    forcast: 'C',
    temperature: '26',
  };

  lazyWeather.controller('TabController', function() {
    this.tab = 1;
  });

})(this, this.angular);