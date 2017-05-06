var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');

module.exports = (function(){
	return {
		index: function(req, res){
			Topic.find({}).populate('_user').populate('_posted_on').populate('_category').exec(function(err, data){
				if (err){
					res.json(err);
				}
				else {
					res.json(data);
				}
			}
		)
			// res.json({type: 'index'})
		},
		create: function(req, res){
			var topic = new Topic(req.body);
			topic.save(function(err, data){
				if (err){
					res.json(err);
				}
				else {
					res.json(data);
				}
			})
			// res.json(req.body)
		},
		show: function(req, res){
			Topic.findOne({_id:req.params.id}).populate('_user').populate('_posted_on').populate('_category').exec(function(err,topic){
				if (err){
					res.json(err);
				}
				else {
					res.json(topic);
				}
			})
		},
		update: function(req, res){
			console.log(req.params.id);
			console.log(req.body);
			Topic.findOne({_id:req.params.id},function(err,resulting_topic){
				if (!err){
					for (var key in req.body){
					resulting_topic[key].push(req.body[key]);
				}
					resulting_topic.save(function(err,topic){
						if (err){
							// save error
							res.json(err);
						}
						else{
							res.json(topic);
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
