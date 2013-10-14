window.angular.module('ngwh.controllers.booking', [])
	.controller('BookingCtrl', ['$scope', 'Booking', '$timeout',
		function ($scope, Booking, $timeout) {
			$scope.rooms = Booking.rooms;
			$scope.customerFilter = null;
			$scope.customerTypes = ['couple', 'family', 'business', 'friends'];

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
	});

// window.angular.module('ngwh.controllers.booking', [])
// 	.filter("isCheckin", function () {
// 		// return function (input, checkin) {
// 		// 	var out = [];
// 		// 	for (var i = 0; i < input.length; i++) {
// 		// 		if(input[i].) {
// 		// 			out.push(input[i]);
// 		// 		}
// 		// 	}
// 		// 	return out;
// 		// }
// 	})