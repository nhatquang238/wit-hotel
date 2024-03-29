'use strict';

// window.app = angular.module('witHotelApp', ['ngwh.controllers', 'ngwh.services', 'angularSmoothscroll', 'ui.bootstrap']);

// //bundling controllers
// angular.module('ngwh.controllers', ['ngwh.controllers.main','ngwh.controllers.booking']);

// //bundling services
// angular.module('ngwh.services', ['ngwh.services.booking']);

angular.module('witHotelApp', ['angularSmoothscroll', 'ui.bootstrap'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/',
    {
      templateUrl: 'views/main.html'
      // controller: 'MainCtrl'
    })
    .when('/booking',
    {
      templateUrl: 'views/booking.html',
      controller: 'BookingCtrl'
    })
    .otherwise(
    {
      templateUrl: '404.html'
    });
  }])
  .factory('Booking', function () {
    var Booking = {};
    Booking.rooms = [
      {
        "name":"Ocean View Pool Villa",
        "avaiFrom": "2013-10-25",
        "avaiTo": "2013-12-31",
        "price": 945,
        "customer_type": ["couple","family"],
        "adultOnly": 3,
        "adultWithChildren": 2,
        "children": 2,
        "view": "ok",
        "privacy": "high",
        "walkingDistance": "short",
        "size": 240,
        "poolSize": 10
      },
      {
        "name":"Ocean Front Pool Villa",
        "avaiFrom": "2013-11-25",
        "avaiTo": "2013-12-31",
        "price": 1365,
        "customer_type": ["couple","family"],
        "adultOnly": 3,
        "adultWithChildren": 2,
        "children": 2,
        "view": "breath taking",
        "privacy": "high",
        "walkingDistance": "long",
        "size": 240
      },
      {
        "name":"Ocean View Pool Suite",
        "avaiFrom": "2013-10-25",
        "avaiTo": "2013-12-01",
        "price": 1390,
        "customer_type": ["couple","family"],
        "adultOnly": 3,
        "adultWithChildren": 2,
        "children": 2,
        "view": "ok",
        "privacy": "high",
        "walkingDistance": "short",
        "size": 230,
        "poolSize": 9
      },
      {
        "name":"Ocean View Pool Room",
        "avaiFrom": "2013-9-25",
        "avaiTo": "2013-11-31",
        "price": 730,
        "customer_type": ["couple"],
        "adultOnly": 2,
        "adultWithChildren": 0,
        "children": 0,
        "view": "ok",
        "privacy": "low",
        "walkingDistance": "short",
        "size": 117,
        "poolSize": 4
      },
      {
        "name":"2 Bedroom Ocean Front Pool Villa",
        "avaiFrom": "2013-10-29",
        "avaiTo": "2014-01-13",
        "price": 2295,
        "customer_type": ["family","friends"],
        "adultOnly": 6,
        "adultWithChildren": 4,
        "children": 2,
        "view": "breath taking",
        "privacy": "high",
        "walkingDistance": "long",
        "size": 300,
        "poolSize": 10
      },
      {
        "name":"Trisara Signature Villa 2 Bedroom",
        "avaiFrom": "2013-10-25",
        "avaiTo": "2014-12-31",
        "price": 2790,
        "customer_type": ["family","friends"],
        "adultOnly": 6,
        "adultWithChildren": 4,
        "children": 2,
        "view": "breath taking",
        "privacy": "high",
        "walkingDistance": "long",
        "size": 538,
        "poolSize": 18
      },
      {
        "name":"3 Bedroom Ocean View Residence",
        "avaiFrom": "2013-10-25",
        "avaiTo": "2013-11-21",
        "price": 3780,
        "customer_type": ["family","friends"],
        "adultOnly": 9,
        "adultWithChildren": 6,
        "children": 3,
        "view": "ok",
        "privacy": "high",
        "walkingDistance": "short",
        "size": 1445,
        "poolSize": 18
      },
      {
        "name":"3 Bedroom Ocean Front Residence",
        "avaiFrom": "2013-10-25",
        "avaiTo": "2014-01-01",
        "price": 4055,
        "customer_type": ["family","friends"],
        "adultOnly": 9,
        "adultWithChildren": 6,
        "children": 3,
        "view": "breath taking",
        "privacy": "high",
        "walkingDistance": "long",
        "size": 1445,
        "poolSize": 18
      },
      {
        "name":"4 Bedroom Ocean Front Residence",
        "avaiFrom": "2013-10-12",
        "avaiTo": "2013-12-31",
        "price": 4740,
        "customer_type": ["family","friends"],
        "adultOnly": 12,
        "adultWithChildren": 8,
        "children": 4,
        "view": "breath taking",
        "privacy": "high",
        "walkingDistance": "long",
        "size": 1000,
        "poolSize": 20
      },
      {
        "name":"5 Bedroom Ocean Front Residence",
        "avaiFrom": "2013-10-18",
        "avaiTo": "2013-12-28",
        "price": 5800,
        "customer_type": ["family","friends"],
        "adultOnly": 15,
        "adultWithChildren": 10,
        "children": 5,
        "view": "breath taking",
        "privacy": "high",
        "walkingDistance": "long",
        "size": 1100,
        "poolSize": 20
      },
      {
        "name":"6 Bedroom Ocean View Residence",
        "avaiFrom": "2013-11-25",
        "avaiTo": "2014-07-23",
        "price": 6070,
        "customer_type": ["family","friends"],
        "adultOnly": 14,
        "adultWithChildren": 12,
        "children": 6,
        "view": "breath taking",
        "privacy": "high",
        "walkingDistance": "long",
        "size": 1250,
        "poolSize": 22
      },
      {
        "name":"Boathouse",
        "avaiFrom": "2013-10-25",
        "avaiTo": "2014-02-12",
        "price": 8050,
        "customer_type": ["family"],
        "adultOnly": 6,
        "adultWithChildren": 4,
        "children": 2,
        "view": "breath taking",
        "privacy": "high",
        "walkingDistance": "long",
        "size": 1500,
        "poolSize": 22
      }
    ];
    return Booking;
  })
  .controller('BookingCtrl', ['$scope', 'Booking', '$timeout',
    function ($scope, Booking, $timeout) {
      $scope.rooms = Booking.rooms;
      $scope.customerFilter = null;
      $scope.customerTypes = ['couple', 'family', 'friends', 'business men', 'solo travel'];

      var today = new Date(),
          tomorrow = new Date(today.getTime() + (24*60*60*1000));

      // initialize default and min checkin date to today
      $scope.checkin = today;
      $scope.toggleCheckinMin = function () {
        $scope.minCheckin = today;
      };
      $scope.toggleCheckinMin();
      $scope.openCheckin = function () {
        $timeout(function () {
          $scope.openedCI = true;
        })
      };

      // initialize default and min checkout date to tomorrow
      $scope.checkout = tomorrow;
      $scope.toggleCheckoutMin = function () {
        $scope.minCheckout = tomorrow;
      };
      $scope.toggleCheckoutMin();
      $scope.openCheckout = function () {
        $timeout(function () {
          $scope.openedCO = true;
        })
      };

      // watch for change on checkin date and update checkout date
      $scope.$watch('checkin', function() {
        $scope.checkout = $scope.checkin.getTime() + (24*60*60*1000);
      });
    }])
  .filter("isCustomer", function () {
    return function(input, customer) {
      if (typeof customer == 'undefined' || customer == null) {
        return input;
      } else {
        var out = [];
        for (var i = 0; i < input.length; i++) {
          for (var j = 0; j < input[i].customer_type.length; j++) {
            if(input[i].customer_type[j] == customer) {
              out.push(input[i]);
            }
          }
        }
        return out;
      }
    };
  })