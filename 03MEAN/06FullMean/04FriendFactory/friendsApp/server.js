var mongoose = require('./config/mongoose'), express = require('./config/express');
// var mongoose = require(mongoose);
// var express = require(express);

// var db = mongoose();

var app = express();

app.listen(3000);

console.log('Server running at http://localhost:3000/');

module.exports = app;