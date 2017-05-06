var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
	// Controller Methods Go Here
	// Index
	index: function(req,res) {
		Task.find({}, function(err, all_tasks) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.json(err);
			} else {
				console.log("Here are all the tasks...");
				res.json(all_tasks);
			}
		})
	},
	// Create
	create: function(req,res) {
		console.log("req.body:",req.body);
		var newTask = new Task(req.body);

		newTask.save(function(err, task) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.json(err);
			} else {
				console.log("New Task created!...");
				res.json(task);
			}
		});
	},

	// Update
	update: function(req,res) {
		Task.findById(req.body._id, function(err, found_task) {
			if(err) {
				console.log("*********** ERRORS ***********");
				console.log(err);
				console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
				res.json(err);
			} else {
				found_task.completed = req.body.completed;
				found_task.save(function(err,task) {
					if(err) {
						console.log("*********** ERRORS ***********");
						console.log(err);
						console.log("^^^^^^^^^ END ERRORS ^^^^^^^^^")
						res.json(err);
					} else {
						console.log("Task updated!");
						res.json(task);
					}
				});
			}
			
		});
	}
}