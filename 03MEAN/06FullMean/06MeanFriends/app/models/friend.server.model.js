var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FriendSchema = new Schema({
    firstName: String,
    lastName: String,
    birthDay: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

mongoose.model('Friend', FriendSchema);