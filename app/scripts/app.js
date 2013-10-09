'use strict';

angular.module('witHotelApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        templateUrl: '404.html',
        controller: 'MainCtrl'
      });
  });