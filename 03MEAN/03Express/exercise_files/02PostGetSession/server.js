var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));

/////////////////////////////////
//GET DATA
/////////////////////////////////
// Root Route
app.get('/', function(request, response){
})
    response.render('index', {title: "my Express project"});

// Route to process new user form data:
app.post('/users', function(request, response){
    // Code to add user to db goes here

    // To redirect to the root route:
    response.redirect('/');
})

// RESTful route for displaying a single user
// route /users/<id> (id is a variable for a specific user's id)
// Any data you wish to pass via the URL must be indicated by a ':'.  It will then be available in the req.params object.
app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});


/////////////////////////////////
//POST DATA
/////////////////////////////////
// Body Parser is needed for getting post data from teh request object
// Require bodyParser
var bodyParser = require('body-parser');
// Use bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// Route to process new user form data:
app.post('/users', function(request, response){
    console.log("POST DATA \n\n", request.body)
    // Code to add user to db goes here
    // Redirect the user back to the root route
    response.redirect('/')
});

app.listen(8000, function(){
    console.log("Listening on port 8000");
});

