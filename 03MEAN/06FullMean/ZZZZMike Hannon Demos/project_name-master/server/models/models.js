//basic model
console.log('hello model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema= new mongoose.Schema({
  name:{type:String}
}, {timestamps:{createdAt:'created_at', updated_at:'updated_at'}});

mongoose.model('users', UserSchema);

var AnswerSchema= new mongoose.Schema({
  name:{type:String,  minlength:3, required:true},
  votes:{type:Number, default:0}
}, {timestamps:{createdAt:'created_at', updated_at:'updated_at'}});

mongoose.model('answers', AnswerSchema);

var QuestionSchema= new mongoose.Schema({
  question:{type:String, minlength:8, required:true},
  creator:{type: Schema.Types.ObjectId, ref:'users'},
  answers:[AnswerSchema]
}, {timestamps:{createdAt:'created_at', updated_at:'updated_at'}});

mongoose.model('questions', QuestionSchema);

/*
types:
var schema = new Schema({
  name:    String,
  binary:  Buffer,
  living:  Boolean,
  updated: { type: Date, default: Date.now },
  age:     { type: Number, min: 18, max: 65 },
  mixed:   Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array:      [],
  ofString:   [String],
  ofNumber:   [Number],
  ofDates:    [Date],
  ofBuffer:   [Buffer],
  ofBoolean:  [Boolean],
  ofMixed:    [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  nested: {
    stuff: { type: String, lowercase: true, trim: true }
  }
})
required validator examples:
var s = new Schema({ born: { type: Date, required: true })
var s = new Schema({ born: { type: Date, required: 'Born is required!' })
custom validation:
(for more see http://mongoosejs.com/docs/validation.html)
function validator (val) {
  return val == 'something';
}
new Schema({ name: { type: String, validate: validator }});
// with a custom error message
var custom = [validator, 'Uh oh, {PATH} does not equal "something".']
new Schema({ name: { type: String, validate: custom }});
// adding many validators at a time
var many = [
  { validator: validator, msg: 'uh oh' }
, { validator: anotherValidator, msg: 'failed' }
]
new Schema({ name: { type: String, validate: many }});
unique:
var s = new Schema({ name: { type: Date, unique: true })
returns an E11000 error not validation error
customize return using get:
function obfuscate (cc) {
  return '****-****-****-' + cc.slice(cc.length-4, cc.length);
}
var AccountSchema = new Schema({
  creditCardNumber: { type: String, get: obfuscate }
});
*/
