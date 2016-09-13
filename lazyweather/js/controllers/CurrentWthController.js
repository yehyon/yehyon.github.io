// (function(global, angular) {
//   'use strict';

//   var lazyWeather = angular.module('lazyWeather');

//   lazyWeather.controller('CurrentWthController', ['$http', function($http) {
//     var lazyWeatherCurrent = this;

//     lazyWeatherCurrent.currentWeather = [];

//     $http({
//       'method': 'GET',
//       'url': 'http://api.openweathermap.org/data/2.5/weather?id=1835847&APPID=b87a29cdc2db8cd57d8d8c85ca8c4fd8'
//     }).then(successAjax, errorAjax);
//     function successAjax(response) {
//       console.log(response.data);
//       console.log(response.data.weather[0]);
//       // ctrl.members = response.data;
//     }
//     function errorAjax(response) {
//       console.log()
//     }
    
//   } ]);

// })(this, this.angular);

(function(global, angular) {
  'use strict';

  var lazyWeather = angular.module('lazyWeather');

  lazyWeather.controller('CurrentWthController', ['$http', function($http) {
    var lazyWeatherCurrent = this;

    lazyWeatherCurrent.currentWeather = [];

    $http({
      'method': 'GET',
      'url': 'http://api.openweathermap.org/data/2.5/weather?id=1835847&APPID=b87a29cdc2db8cd57d8d8c85ca8c4fd8'
    }).then(successAjax, errorAjax);
    function successAjax(response) {
      console.log(response.data);
      console.log(response.data.weather[0].main);
      lazyWeatherCurrent.currentWeather = response.data;
    }
    function errorAjax(response) {
      console.log()
    }

  }]);

})(this, this.angular);

