//basic model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bucketListsSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    trim: true
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

mongoose.model('bucketLists', bucketListsSchema);
