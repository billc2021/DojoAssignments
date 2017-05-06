var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/meanWall', function(err){
    if(err) { 
        console.log('Error connecting to Mongoose', err);
    } else {
        console.log('Connect to Mongoose');
    }
});

require('../models/message');