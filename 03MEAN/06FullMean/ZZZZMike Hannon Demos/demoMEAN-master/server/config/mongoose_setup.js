console.log('mongoose setup');
/* this file connects to mongo server, creates DB name, and loads our models */

// require this file in your server (so it loads your models)
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');


mongoose.connect('mongodb://localhost/EXAMPLEAWESOME'); // creates the name of the DB.

var models_path = path.join( __dirname , '/../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})
