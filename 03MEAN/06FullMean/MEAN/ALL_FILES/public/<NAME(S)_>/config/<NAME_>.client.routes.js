angular.module('<MODULE_NAME>').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/<URL_PATH>', {
			templateUrl: '<TEMPLATE_PATH>'
		}).
		when('/<URL_PATH>/create', {
			templateUrl: '<TEMPLATE_PATH>'
		}).
		when('/<URL_PATH>/:<NAME_FOR_ID>Id', {
			templateUrl: '<TEMPLATE_PATH>'
		}).
		when('/<URL_PATH>/:<NAME_FOR_ID>Id/edit', {
			templateUrl: '<TEMPLATE_PATH>'
		});
	}
]); 