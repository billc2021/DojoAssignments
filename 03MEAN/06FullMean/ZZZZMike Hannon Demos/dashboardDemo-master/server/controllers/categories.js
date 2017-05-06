var mongoose = require('mongoose');
var Category = mongoose.model('Category');

module.exports = (function(){
	return {
		index: function(req, res){
			Category.find({},function(err, categories){
				if(err){ res.json(err)}
				else{ res.json(categories)}
			})
		},
		create: function(req, res){
			res.json({type: 'create'})
		},
		show: function(req, res){
			res.json({type: 'show'})
		},
		update: function(req, res){
			res.json({type: 'update'})
		},
		delete: function(req, res){
			res.json({type: 'delete'})
		}
	}
})();