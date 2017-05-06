var http = require('http'),
	express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	fs = require('fs')
	// config = require('./config'),


module.exports = function() {
    var app = express();
    var server = http.createServer(app);
 
    app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

    app.set('views', './app/views');
	app.set('view engine', 'ejs');

    // require('../routes/index.server.routes.js')(app);

	require('../app/routes/friends.server.routes.js')(app);

    app.use(express.static('./public'));

    return server;
};