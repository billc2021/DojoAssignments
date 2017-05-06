var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');


//change this connect line
mongoose.connect('mongodb://localhost/DB');
var models_path = __dirname + '/../models'
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})