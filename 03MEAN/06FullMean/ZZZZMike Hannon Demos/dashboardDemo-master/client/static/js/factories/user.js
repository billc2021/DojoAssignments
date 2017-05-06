myApp.factory('UserFactory', function($http){
	var factory = {};
	var user = {};
	factory.createUser = function(info, callback){
		$http.post('/users', info).success(function(data){
			user = data;
			callback(data);
		})
	}
	factory.getCurrentUser = function(callback){
		callback(user);
	}
	factory.update = function (info, user_id){
		$http.patch('/users/'+user_id, info).success(function(data){
			console.log(data);
		});
	}

	return factory;
})
