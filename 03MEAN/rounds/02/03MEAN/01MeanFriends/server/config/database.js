console.log('/server/config/database.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/friends_api', function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to Mongoose');
    }
});

require('../models/friend');