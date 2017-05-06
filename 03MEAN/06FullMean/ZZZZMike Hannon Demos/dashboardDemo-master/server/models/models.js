var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: { type: String, required:true, minlength: 2, maxlength: 20 },
	_topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
	_posted_on: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	created_at: { type: Date, default: Date() }
});

var TopicSchema = new Schema({
	title: {type: String, required: true, minlength: 2},
	description: { type: String, required:true, minlength:2 },
	created_at: { type: Date, default: Date() },
	_category: { type: Schema.Types.ObjectId, ref: 'Category'},
	_posted_on: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
})

var PostSchema = new Schema({
	post_content: { type: String, required:true, minlength:2 },
	counts: {
		likes: {type: Number, default: 0},
		dislikes: {type: Number, default: 0}
	},
	created_at: { type: Date, default: Date() },
	_topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
	_post_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

var CommentSchema = new Schema({
	comment_content: { type: String, required:true, minlength:2 },
	created_at: { type: Date, default: Date() },
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	_comment_user: {type: Schema.Types.ObjectId, ref: 'User'},
})

var CategorySchema = new Schema({
	category_name: {type: String, required: true, minlength: 2},
	created_at: { type: Date, default: Date() }
})

mongoose.model('User', UserSchema );
mongoose.model('Topic', TopicSchema);
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
mongoose.model('Category', CategorySchema);
