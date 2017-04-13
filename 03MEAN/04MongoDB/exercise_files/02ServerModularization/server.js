var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./config/mongoose_setup.js');
require('./config/routes.js')(app);



app.listen(8000, function(){
    console.log('Running on port 8000');
});