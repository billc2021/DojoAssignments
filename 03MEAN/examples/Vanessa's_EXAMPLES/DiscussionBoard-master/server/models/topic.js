var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topicSchema = new mongoose.Schema( {
	author: {type: Schema.Types.ObjectId, ref: 'User'},
	topic: {type: String, required: true},
	description: {type: String, required: true},
	category: {type: String, required: true},
	up_vote: Number,
	down_vote: Number,
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	created_at: {type: Date, default: new Date}
});

var Topic = mongoose.model('Topic', topicSchema);