var mongoose = require('mongoose'),
	Friend = mongoose.model('friends');

var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknown server error';
	}
};

exports.create = function(req, res) {
	var friend = new Friend(req.body);

	friend.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(friend);
		}
	});
};

exports.list = function(req, res) {
	Friend.find()(function(err, friends) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(friends);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.friend);
};

exports.update = function(req, res) {
	var friend = req.friend;

	friend.title = req.body.title;
	friend.content = req.body.content;

	friend.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(friend);
		}
	});
};

exports.delete = function(req, res) {
	var friend = req.friend;

	friend.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(friend);
		}
	});
};

exports.friendByID = function(req, res, next, id) {
	Friend.findById(id).populate('creator', 'firstName lastName fullName').exec(function(err, friend) {
		if (err) return next(err);
		if (!friend) return next(new Error('Failed to load friend ' + id));

		req.friend = friend;

		next();
	});
};