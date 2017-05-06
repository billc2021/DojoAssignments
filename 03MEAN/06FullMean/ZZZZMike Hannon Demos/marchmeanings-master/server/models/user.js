//basic model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  bucketLists: [{
    type: Schema.Types.ObjectId,
    ref: 'bucketLists'
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

mongoose.model('users', userSchema);