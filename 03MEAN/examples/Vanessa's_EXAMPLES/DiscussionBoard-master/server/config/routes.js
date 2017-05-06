var users = require('./../controllers/users.js');

module.exports = function(app) {
	app.post('/newuser', function(req, res) {
		users.create(req, res);

	
	})
	
};