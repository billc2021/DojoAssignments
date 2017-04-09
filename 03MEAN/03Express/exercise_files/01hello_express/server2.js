var express = require("express");
var app = express();

// This sets the location where express will look for the ejs views
app.set("views", __dirname + "/views");

// This sets the view engine so that express knows that ejs is being used
app.set("view engine", "ejs");

// This tell the server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));

app.get("/users", function(request, response){
    var users_array = [
        {name: "Micheal", email: "micheal@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render("users", {users: users_array});
})

app.listen(8000, function(){
    console.log("Listening on port 8000");
})