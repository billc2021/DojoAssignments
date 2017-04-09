var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index');
})
app.post('/result', function(request, response){
    var info = {
    name: request.body.name,
    language: request.body.language,
    location: request.body.location,
    comment: request.body.comment,
    }
    // response.render('result', {info: info})
    response.redirect('/')
})

app.post('/process', function(request, response){
    
    response.redirect('result');
})

var server = app.listen(8000, function(){
    console.log('Listening on port 8000');
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
    socket.on('posting_form', function(data){
        name = data.name
        location = data.local
        language = data.lang
        comment = data.comment
        console.log(name, location, language, comment)
        info = {
            name: name,
            location: location,
            language: language,
            comment: comment
        }
        socket.emit('updated_message', {info: info})
    })
})