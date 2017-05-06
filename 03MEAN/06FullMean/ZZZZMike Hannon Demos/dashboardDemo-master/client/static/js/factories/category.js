myApp.factory('CategoryFactory', function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get('/categories').success(function(data){
			callback(data);
		})
	}
	return factory;
})