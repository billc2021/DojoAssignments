// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


///////////////////////////////////////////////
// MODULARIZED VIEWS
///////////////////////////////////////////////
// static content
app.use(express.static(path.join(__dirname, './client/static')));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
///////////////////////////////////////////////
///////////////////////////////////////////////


///////////////////////////////////////////////
// MODULARIZED MODELS
///////////////////////////////////////////////
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
///////////////////////////////////////////////
///////////////////////////////////////////////


///////////////////////////////////////////////
// MODULARIZED ROUTES
///////////////////////////////////////////////
// 01. store the function in a variable 
// 02. invoke the function stored in routes_setter and pass it the "app" variable
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
// Could have also done the following and combined the two steps into one
// var routes_setter = require('./server/config/routes.js')(app);
///////////////////////////////////////////////
///////////////////////////////////////////////


///////////////////////////////////////////////
// 
///////////////////////////////////////////////

///////////////////////////////////////////////
///////////////////////////////////////////////


// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})