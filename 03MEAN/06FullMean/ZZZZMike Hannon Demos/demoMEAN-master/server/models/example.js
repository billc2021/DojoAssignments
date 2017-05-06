console.log('example model');
/*
require mongoose - allows us to build collections into our DB - with a set of rules laid out by the Schema.
We can also do a bunch of stuff: like validations etc.

*/
var mongoose = require('mongoose'); // get the mongoose object from node_modules - if it hasn't been created yet, create it, otherwise reference it as mongoose.
// var Schema = mongoose.Schema;

// set of rules for an example - (our collection name)
var e = new mongoose.Schema(
  // rule set -- the names of the rows in the collection
  {
    name: {
      type: String,
      required: true,
      minlength: 4,
      get: myFunction,
      unique:true
    },
    credit_number: {
      type:Number,
      get:obfuscate
    }
  },
  // a second set of optional parameters
  {
    timestamps:{createdAt:'created_at', updatedAt:'updated_at'}
  }
)

function obfuscate(cc){
  return (cc.slice(cc.length-4));
}

function myFunction(eachName){
  return eachName + "hello";
}
// examples is our collection name!
mongoose.model('examples', e);
