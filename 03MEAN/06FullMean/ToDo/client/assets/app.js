var app = angular.module('app', ['ngRoute']);

// *********** ROUTES ***********
app.config(function($routeProvider) {
	$routeProvider
	.when('/index', {
		templateUrl: '../partials/index.html',
		controller: 'IndexController'
	})
	.when('/create', {
		templateUrl: '../partials/new.html',
		controller: 'CreateController'
	})
	.otherwise('/index')
})