// *********** FACTORY ***********
app.factory('taskFactory', function($http) {
	var factory = {};

	factory.index = function(callback) {
		$http.get('/index').then(function(returned_data) {
			console.log("Found some tasks:,", returned_data);
			callback(returned_data.data);
		});
	}

	factory.create = function(taskObj, callback) {
		$http.post('/new',taskObj).then(function(returned_data) {
			callback(returned_data.data);
		});
	}

	factory.changeStatus = function(taskObj, callback) {
		$http.put('/update', taskObj).then(function(returned_data) {
			callback(returned_data.data);
		})
	}

	return factory;
});