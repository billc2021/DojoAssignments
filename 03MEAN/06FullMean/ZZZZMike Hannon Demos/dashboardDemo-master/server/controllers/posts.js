var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports = (function(){
	return {
		index: function(req, res){
			res.json({type: 'index'})
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