// Loads the express module
var express = require("express");

// Invoke var express and store the resulting application in var app
var app = express();

app.get('/', function(request, response){
    response.send("<h1>Hello Express</h1>");
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})