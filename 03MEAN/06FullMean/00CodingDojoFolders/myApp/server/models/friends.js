console.log('friends model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FriendsSchema = new Schema({
    firstName: String,
    lastName: String,
    birthDay: Date
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

mongoose.model('friends', FriendsSchema);