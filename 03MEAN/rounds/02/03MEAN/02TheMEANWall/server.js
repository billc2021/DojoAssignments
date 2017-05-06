var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join((__dirname, './client'))));

require('./server/config/database');
require('./server/models/message');
require('./server/config/routes')(app);

app.listen(3000, function(){
    console.log('Running on port 3000');
})
