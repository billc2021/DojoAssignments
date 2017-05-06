// Workding with Mongoose

////////////////////////////////////
// Require Mongoose
////////////////////////////////////
var mongoose = require('mongoose');

////////////////////////////////////
// Connecting to a Mongo Database
////////////////////////////////////
mongoose.connect('mongodb://localhost/test');

////////////////////////////////////
// DEFINING A MODEL
////////////////////////////////////
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
name: String,
username: { type: String, required: true, unique: true },
password: { type: String, required: true },
admin: Boolean,
location: String,
meta: {
    age: Number,
    website: String
},
created_at: Date,
updated_at: Date
});

// Create a model using the newly created Schema
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
////////////////////////////////////
////////////////////////////////////


////////////////////////////////////
// CUSTOM METHOD
////////////////////////////////////
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema //...

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users
userSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude'; 

  return this.name;
};
////////////////////////////////////
////////////////////////////////////


////////////////////////////////////
// Mongoose CRUD Commands
////////////////////////////////////

//////////////
// Create
//////////////
// grab the user model
var User = require('./app/models/user');

// create a new user
var newUser = User({
  name: 'Peter Quill',
  username: 'starlord55',
  password: 'password',
  admin: true
});

// save the user
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});
//////////////////////////////////////////
//////////////////////////////////////////


//////////////
// READ
//////////////

// FIND ALL     
User.find({}, function(err, users) {
if (err) throw err;

// object of all the users
console.log(users);
});

// FIND ONE
User.find({ username: 'starlord55' }, function(err, user) {
if (err) throw err;

// object of the user
console.log(user);
});

// FIND BY ID
User.findById(1, function(err, user) {
if (err) throw err;

// show the one user
console.log(user);
});
//////////////////////////////////////////
//////////////////////////////////////////


//////////////
// UPDATE
//////////////
// FIND BY ID
User.findById(1, function(err, user) {
  if (err) throw err;

  // change the users location
  user.location = 'uk';

  // save the user
  user.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });
});

//FIND AND UPDATE
User.findOneAndUpdate({ username: 'starlord55' }, { username: 'starlord88' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});

// FIND BY ID AND UPDATE
User.findByIdAndUpdate(4, { username: 'starlord88' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
//////////////////////////////////////////
//////////////////////////////////////////


//////////////
// DELETE
//////////////
// GET A USER, THEN REMOVE
// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // delete him
  user.remove(function(err) {
    if (err) throw err;

    console.log('User successfully deleted!');
  });
});

// FIND AND REMOVE
// find the user with id 4
User.findOneAndRemove({ username: 'starlord55' }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});

//FIND BY ID AND REMOVE
// find the user with id 4
User.findByIdAndRemove(4, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
//////////////////////////////////////////
//////////////////////////////////////////


////////////////////////////////////
// Misc Commands
////////////////////////////////////

// Mongoose#set(key, value)
    mongoose.set('test', value) // sets the 'test' option to `value`

    mongoose.set('debug', true) // enable logging collection methods + arguments to the console
