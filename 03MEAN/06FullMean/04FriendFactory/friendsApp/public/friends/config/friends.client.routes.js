angular.module('friends').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/friends', {
			templateUrl: '<TEMPLATE_PATH>'
		}).
		when('/friends/create', {
			templateUrl: '<TEMPLATE_PATH>'
		}).
		when('/friends/:friendId', {
			templateUrl: '<TEMPLATE_PATH>'
		}).
		when('/friends/:friendId/edit', {
			templateUrl: '<TEMPLATE_PATH>'
		});
	}
]); 