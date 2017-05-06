// require mongoose
var mongoose = require('mongoose');

// require the fs module for loading model files
var fs = require('fs');

// require path for getting the models path
var path = require('path');

// connect to mongoose!
mongoose.connect('mongodb://localhost/friendsAPI');// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');

