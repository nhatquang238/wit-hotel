window.angular.module('ngwh.controllers.booking', [])
	.controller('BookingCtrl', ['$scope', 'Booking',
		function ($scope, Booking) {
			$scope.rooms = Booking.rooms;
			$scope.customerFilter = null;
			$scope.customerTypes = ['couple', 'family', 'business', 'friends'];

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
	});

