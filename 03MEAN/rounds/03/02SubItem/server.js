var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

require('./server/config/server.routes.js')(app);
require('./server/config/server.database');

app.listen(3000, function(){
    console.log('Running on port 3000');
});