var users = require('../../app/controllers/users.server.controller'),
	friends = require('../../app/controllers/friends.server.controller');

module.exports = function(app) {
	app.route('/api/friends')
	   .get(friends.list)
	   .post(users.requiresLogin, friends.create);
	
	app.route('/api/friends/:friendId')
	   .get(friends.read)
	   .put(users.requiresLogin, friends.hasAuthorization, friends.update)
	   .delete(users.requiresLogin, friends.hasAuthorization, friends.delete);

	app.param('friendId', friends.friendByID);
};