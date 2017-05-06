var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return {
		index: function(req, res){
			res.json({type: 'index'})
		},
		create: function(req, res){
			console.log( req.body);
			User.findOne({name: req.body.name }, function(err, user){
				if(err){res.json(err);}
				else if(user){ res.json(user)}
				else if(!user){
					var user = new User(req.body);
					user.save(function(err){
						if(err){res.json(err)}
						else{ res.json(user) }
					})
				}
			})
		},
		show: function(req, res){
			res.json({type: 'show'})
		},
		update: function(req, res){
			console.log(req.params.id);
			console.log(req.body);
			User.findOne({_id:req.params.id},function(err,resulting_user){
				if (!err){
					for (var key in req.body){
					resulting_user[key].push(req.body[key]);
				}
					resulting_user.save(function(err,user){
						if (err){
							// save error
							res.json(err);
						}
						else{
							res.json(user);
						}
					});
				}
				else{
					// findone error
					res.json(err);
				}
			})
		},
		delete: function(req, res){
			res.json({type: 'delete'})
		}
	}
})();
