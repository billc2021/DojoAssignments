dBoard.factory('userFactory', function($http) {
	var factory = {};
	current_user = {};
	

	factory.create = function(user, callback) {
		
		$http.post('/newuser', user).success(function(output) {
			current_user = output;
			console.log(current_user);
			callback(current_user);

			
		})
	}



	// factory.create = function(info, callback) {
	// 	$http.post('/friends', info)
	// 	.success(function(output) {
	// 		friends.push({
	// 			name: info.name,
	// 			age: info.age
	// 		});
	// 		callback(friends);

	// 	})	
	// }

	// factory.delete = function(friend, callback) {
	// 	$http.delete('friends/' + friend._id)
	// 	.success(function(output) {
	// 		friends = output;
	// 		callback(friends);
 //    })
	// }

	

	 return factory;
});