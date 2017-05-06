var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

// Prints every route request to the console
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

require('./server/config/server.routes.js')(app);

require('./server/config/server.mongoose.js');

app.listen(3000, function(){
    console.log('Running on port 3000');
})