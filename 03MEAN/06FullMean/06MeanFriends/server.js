process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

var db = mongoose();
var app = express(db);
var passport = passport();

app.listen(3000, function(){
    console.log('Running on port 3000');
});

module.exports = app;