var dBoard = angular.module('dBoard', ['ngRoute']);

dBoard.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html'
	})
	.when('/topic', {
		templateUrl: 'partials/topic.html'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html'
	})
	.when('/user', {
		templateUrl: 'partials/user.html'
	})
	.otherwise({
		redirectTo: '/'
	});
})


