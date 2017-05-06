///////////////////
// Minimal Server
///////////////////
var express = require('express');
var app = express();

app.get('/hello', function(req, res){
	res.send("Hello World!");
});

app.listen(3000, function(){
    console.log('Running on port 3000')
});

// SERVER EXTRAS
/////////////////////
// For Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));



///////////////////
// ROUTES
///////////////////
app.get('/', function(req, res){
    res.render('index', {title: 'Title'});
});

app.post('/hello', function(req, res){
	res.send("You just called the post method at '/hello'!\n");
});

app.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
});

app.delete('/:id', function(req, res){
    // Code for delete
    // res.redirect('/')
})

app.put('/', function (req, res) {
  res.send('PUT request to homepage');
});

app.get('/things/:name/:id', function(req, res){
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

///////////////////
// bodyParser
///////////////////
// To read POST data

var bodyParser = require('body-parser');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

app.post('/', function(req, res){
    console.log(req.body);
    res.redirect('/protected_page');;
});
///////////////////
///////////////////
