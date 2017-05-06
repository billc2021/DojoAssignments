console.log('server.database.js');

var mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/subItemDB');

require('../models/server.item');
require('../models/server.subItem');