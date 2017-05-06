var	friends = require('../controllers/friends.server.controllers');

module.exports = function(app) {
	app.route('/api/friends')
	   .get(friends.list)
	
	app.route('/api/friends/:friendId')
	   .get(friends.read)
	   .put(friends.update)
	   .delete(friends.delete);

	app.param('friendId', friends.friendByID);
};