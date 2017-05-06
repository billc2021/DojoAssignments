var mongoose = require('mongoose');
var Task = mongoose.model('Task');
var tasks = require('../controllers/controller.js');

module.exports = function(app) {
	app.get('/index', function(req,res) {
		console.log('Found / route');
		tasks.index(req,res);
	});

	app.post('/new', function(req,res) {
		console.log("Creating new task...");
		tasks.create(req,res);
	});

	app.put('/update', function(req,res) {
		console.log("Updating completed field...");
		tasks.update(req,res);
	});
}