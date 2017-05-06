var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
 username: {type: String, required: true},
 created_at: {type: Date, default: new Date}
});



var User = mongoose.model('User', userSchema);