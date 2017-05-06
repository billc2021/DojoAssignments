//Standard express setup
var express=require('express'),
app = express(),
bodyParser = require('body-parser'),
path = require('path');

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

require('./server/config/routes.js')(app)
var mongoose = require('./server/config/mongoose.js')


app.listen(8000, function() {});
