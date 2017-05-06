var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
 _post: {type: Schema.Types.ObjectId, ref: 'Topic'},
 author: {type: Schema.Types.ObjectId, ref: 'User'},
 comment: {type: String, required: true},
 created_at: {type: Date, default: new Date}
});



var Comment = mongoose.model('Comment', commentSchema);