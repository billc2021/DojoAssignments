var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
var posts = require('../controllers/posts.js');
var comments = require('../controllers/comments.js');
var categories = require('../controllers/categories.js');

module.exports = function(app){
	// no data :(
	app.get('/users',  				users.index ),
	app.get('/topics',  			topics.index ),
	app.get('/posts',  				posts.index ),
	app.get('/comments',  			comments.index ),
	app.get('/categories',  		categories.index ),
	// data in req.params
	app.get('/users/:id',  			users.show ),
	app.get('/topics/:id',  		topics.show ),
	app.get('/posts/:id',  			posts.show ),
	app.get('/comments/:id',  		comments.show ),
	// data in req.body
	app.post('/users',  			users.create ),
	app.post('/topics',  			topics.create ),
	app.post('/posts',  			posts.create ),
	app.post('/comments',  			comments.create ),
	// data in req.params and req.body
	app.patch('/users/:id',  		users.update ),
	app.patch('/topics/:id',  		topics.update ),
	app.patch('/posts/:id',  		posts.update ),
	app.patch('/comments/:id',  	comments.update ),
	// data in req.params
	app.delete('/users/:id',		users.delete ),
	app.delete('/topics/:id',		topics.delete ),
	app.delete('/posts/:id',		posts.delete ),
	app.delete('/comments/:id',		comments.delete )

}