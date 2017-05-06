//basic model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BucketSchema= new mongoose.Schema({
  // info here!
  title: {type: String, required:true, minlength: 5},
  description: {type: String, required:true, minlength: 10},
  _creator:{type: Schema.Types.ObjectId, ref: 'users'},
  completed:{type: Boolean},
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
//ObjectId("507c7f79bcf86cd7994f6c0e").getTimestamp() (created_at) (ISODate)

// change the name to lowercase, model arg1 - lowercase name of collection
// model arg2, reference to the schema
mongoose.model('bucketlissts', BucketSchema);
