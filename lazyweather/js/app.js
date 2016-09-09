(function(global, angular) {
  'use strict';
  // var apiKey = b87a29cdc2db8cd57d8d8c85ca8c4fd8

  var myApp = angular.module('myApp', []);

  myApp.controller('temperatureController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });
    $scope.search = "Sherlock Holmes";
  })


})(this, this.angular);