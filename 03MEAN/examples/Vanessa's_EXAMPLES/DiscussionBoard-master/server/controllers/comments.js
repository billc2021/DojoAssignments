var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');



module.exports = (function() {
	// return {
	// 	index: function(req, res) {
	// 		Friend.find({}, function(err, results) {
	// 			if (err) {
	// 				console.log(err);
	// 			} else {
	// 				res.json(results);
	// 			}
	// 		})
	// 	},

		// create: function(req, res) {
		// 	var friend = new Friend(req.body);
		// 	friend.save(function(err) {
		// 		if(err) {
	 //      	console.log('Nope');
	 //    	} else { 
	 //      	res.json(friend);
	 //    	}
		// 	})
		// },

		// delete: function(req, res) {
		// 	Friend.remove({_id: req.params.friend_id}, function(err) {
		// 		if (err) {
		// 			console.log('Still there.');
		// 		} else {
		// 			Friend.find({}, function(error, results) {
		// 				if (error) {
		// 				} else {
		// 					res.json(results);
		// 				}
		// 			})
		// 		}
		// 	})
	// 	}
	// }
})();