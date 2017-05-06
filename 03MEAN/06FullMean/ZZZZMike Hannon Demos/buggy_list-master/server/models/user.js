//basic model
var mongoose = require('mongoose');

var UsersSchema= new mongoose.Schema({
  name:{type: String, required: true, unique :true},
  bucketlists:[{type: Schema.Types.ObjectId, ref: 'bucketlists'}],
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

//ObjectId("507c7f79bcf86cd7994f6c0e").getTimestamp() (created_at) (ISODate)


// change the name to lowercase, model arg1 - lowercase name of collection
// model arg2, reference to the schema
mongoose.model('users', UsersSchema);
