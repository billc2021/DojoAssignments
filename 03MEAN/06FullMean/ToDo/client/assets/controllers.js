// *********** CONTROLLERS ***********

// Index Controller
app.controller('IndexController', function($scope, $location, taskFactory) {
	console.log("Found IndexController");
	$scope.all_tasks = [];
	$scope.showFinishedTasks = true;
	taskFactory.index(function(all_tasks) {
		$scope.all_tasks = all_tasks;
	});

	$scope.changeStatus = function(index) {
		console.log("$index:",index);
		console.log("completed:",$scope.all_tasks[index].completed);
		taskFactory.changeStatus($scope.all_tasks[index], function(response) {
			console.log(response);
			$location.url('/index');
		});
	}

	$scope.toggle = function() {
		if($scope.showFinishedTasks == true) {
			$scope.showFinishedTasks = false;
		} else {
			$scope.showFinishedTasks = true;
		}
	}

});

// Create Controller
app.controller('CreateController', function($scope, $location, taskFactory) {
	console.log("Found CreateController...");
	$scope.create = function() {
		taskFactory.create($scope.task, function(response) {
			console.log(response);
			$location.url('/#!/index');
		});
	}
});