/*
  This will be where we run our main server from!
*/
console.log('I am a server');
//Standard express setup
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyparser = require('body-parser');
// client is now our target for getting static files.
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
// var io = require(s)
//npm install body-parser --save
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
require('./server/config/mongoose_setup.js');
// passes the argument app to routes, which gets caught in routes by the parameter app.
require('./server/config/routes.js')(app);
// require('./server/config/socket_routes.js')(io)

app.listen(8000, function() {
  console.log(' I heart 8000')
});
