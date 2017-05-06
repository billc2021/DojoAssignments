var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
	title: String,
	dueDate: Date,
	completed: {type:Boolean, default: false},
}, {timestamps:true});

mongoose.model('Task', TaskSchema);