var mongoose = require('mongoose'),
    Friend = mongoose.model('Friend');

var getErrorMessage = function(err){
    if(err.errors){
        for(var errName in err.errors){
            if(err.errors[errName].message) return err.errors[errName].message;
        }
    }else{
        return 'Unknown server error';
    }
};

exports.create = function(req, res){
    var friend = new Friend(req, res);

    friend.save(function(err){
        if(err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }else{
            res.json(friend);
        }
    });
};

exports.list = function(req, res){
    Friend.find(function(err){
        if(err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }else{
            res.json(friends)
        }
    });
};

exports.read = function(req, res){
    res.json(req.friend);
};

exports.update = function(req, res){
    var friend = req.friend;

    friend.firstName = req.body.firstName;
    friend.lastName = req.body.lastName;
    friend.birthDay = req.body.birthDay;

    friend.save(function(err){
        if(err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }else{
            res.json(friend);
        }
    });
};

exports.delete = function(req, res){
    var friend = req.friend;

    friend.remove(function(err){
        if(err){
            return res.status(400).send({
                message: getMessageMessage(err)
            });
        }else{
            res.json(friend)
        }
    });
};

exports.friendByID = function(req, res, next, id){
    Friend.findById(id).exec(function(err, friend){
        if(err) return next(err);
        if (!friend) return next(new Error('Faild to load friend ' + id));

        req.friend = friend;

        next();
    });
};

exports.hasAuthorization = function(req, res, next) {
	if (req.article.creator.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}

	next();
};