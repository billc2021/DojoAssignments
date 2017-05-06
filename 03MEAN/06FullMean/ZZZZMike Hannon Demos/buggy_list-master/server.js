//Standard express setup
var express=require('express'),
app = express(),
path = require('path');
var bodyParser = require('body-parser')

// gets static files from client as well as bower_components
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

// gets mongoose
require('./server/config/mongoose.js');
//gets routes and then instantiates the routes function with our app
require('./server/config/routes.js')(app);
//allows us to integrate sockets
var http = require('http').Server(app);
// server on!
http.listen(8000, function() {});
