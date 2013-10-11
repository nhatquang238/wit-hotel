window.app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
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