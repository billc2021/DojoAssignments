////////////////////////////////////////
// DEFINGING SCHEMAS
////////////////////////////////////////
/*
A simple schema. 
    1. require() mongoose
    2. Use the Schema constructor to create a new schema instance
    3. Define the various fields inside it in the constructor's object parameter
*/
//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string          : String,
    a_date            : Date
});
////////////////////////////////////////
////////////////////////////////////////

////////////////////////////////////////
// CREATING A MODEL
////////////////////////////////////////
// Models are created from schemas using the mongoose.model() method:
// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// SCHEMA TYPES (fields)
////////////////////////////////////////
var schema = new Schema(
{
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } }
})
////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// VALIDATION 
////////////////////////////////////////
// The example below (slightly modified from the Mongoose documents) shows how you can specify some of the validator types and error messages:
var breakfastSchema = new Schema({
      eggs: {
        type: Number,
        min: [6, 'Too few eggs'],
        max: 12,
        required: [true, 'Why no bacon?']
      },
      drink: {
        type: String,
        enum: ['Coffee', 'Tea', 'Water',]
      }
    })
////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// CREATING AND MODIFYING DOCUMENTS
////////////////////////////////////////
//Using the create() method
SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
  if (err) return handleError(err);
  // saved!
});

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// ACCESSING AND CHANGING MODEL FIELD VALUES
////////////////////////////////////////
/* You can access the fields in this new record using the dot syntax, and change the values. 
You have to call save() or update() to store modified values back to the database. */
// Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name="New cool name";
awesome_instance.save(function (err) {
   if (err) return handleError(err); // saved!
   });
////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// CALLBACKS IN MONGOOSE
////////////////////////////////////////
/*
NOTE: ALL CALLBACKS IN MONGOOSE USE TE PATTERN CALLBACK(ERROR, RESULT).
IF AN ERROR OCCURS EXECUTING THE QUERY, TE ERROR PARAMETER WILL CONTAIN AN ERROR DOCUMENT, AND RESULTS WILL BE NULL.
IF THE QUERY IS SUCCESSFUL, THE ERROR PARAMETER WILL BE NULL, AND THE RESULT WILL BE POPULATED WITH THE RESULTS OF THE QUERY
*/

/*
If you don't specify a callback then the API will return a variable of type Query. You can use this query object to build up your query and then execute it (with a callback) later using the exec() method. */

// find all athletes that play tennis
var query = Athlete.find({ 'sport': 'Tennis' });

// selecting the 'name' and 'age' fields
query.select('name age');

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec(function (err, athletes) {
  if (err) return handleError(err);
  // athletes contains an ordered list of 5 athletes who play Tennis
})

////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// SEARCHING FOR RECORDS - THE FIND()
////////////////////////////////////////
var Athlete = mongoose.model('Athlete', yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
  if (err) return handleError(err);
// 'athletes' contains the list of athletes that match the criteria.
})

/*
Above we've defined the query conditions in the find() method. 
We can also do this using a where() function, and we can chain all the parts 
of our query together using the dot operator (.) rather than adding them separately. 
The code fragment below is the same as our query above, with an additional condition for the age.
*/
Athlete.
  find().
  where('sport').equals('Tennis').
  where('age').gt(17).lt(50).  //Additional where query
  limit(5).
  sort({ age: -1 }).
  select('name age').
  exec(callback); // where callback is the name of our callback function.

/*
The find() method gets all matching records, but often you just want to get one match. The following methods query for a single record:

findById(): 
    Finds the document with the specified id (every document has a unique id).
findOne(): 
    Finds a single document that matches the specified criteria.
findByIdAndRemove(), findByIdAndUpdate(), findOneAndRemove(), findOneAndUpdate(): 
    Finds a single document by id or criteria and either update or remove it. 
    These are useful convenience functions for updating and removing records.
*/

////////////////////////////////////////
////////////////////////////////////////

////////////////////////////////////////
// WORKING WITH RELATED DOCUMENTS - POPULATION
////////////////////////////////////////
/* 
You can create references from one document/model instance to another using the ObjectId schema field,
or from one document to many using an array of ObjectIds. */

/*
The following schema defines authors and stories. 
Each author can have multiple stories, which we represent as an array of ObjectId. 
Each story can have a single author. 
The "ref" tells the schema which model can be assigned to this field.
*/
var mongoose = require('mongoose'), Schema = mongoose.Schema

var authorSchema = Schema({
  name    : String,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
  author : { type: Schema.Types.ObjectId, ref: 'Author' },
  title    : String,
});

var Story  = mongoose.model('Story', storySchema);
var Author = mongoose.model('Author', authorSchema);

/*
We can save our references to the related document by assigning the _id value. 
Below we create an author, then a book, and assign the author id to our stories author field.
*/
var bob = new Author({ name: 'Bob Smith' });

bob.save(function (err) {
  if (err) return handleError(err);

  //Bob now exists, so lets create a story
  var story = new Story({
    title: "Bob goes sledding",
    author: bob._id    // assign the _id from the our author Bob. This ID is created by default!
  });

  story.save(function (err) {
    if (err) return handleError(err);
    // Bob now has his story
  });
});

/*
Our story document now has an author referenced by the author document's ID. 
In order to get the author information in our story results we use populate(), as shown below.
*/
Story
.findOne({ title: 'Bob goes sledding' })
.populate('author') //This populates the author id with actual author information!
.exec(function (err, story) {
  if (err) return handleError(err);
  console.log('The author is %s', story.author.name);
  // prints "The author is Bob Smith"
});

/*
Note: Astute readers will have noted that we added an author to our story, 
but we didn't do anything to add our story to our author's stories array. 
How then can we get all stories by a particular author? One way would be to add our author to the stories array, but this this would result in us having two places where the information relating authors and stories needs to be maintained.

A better way is to get the _id of our author, then use find() to search for this in the author field across all stories.
*/
Story
.find({ author : bob._id })
.exec(function (err, stories) {
  if (err) return handleError(err);
  // returns all stories that have Bob's id as their author.
});
////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// 
////////////////////////////////////////

////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// 
////////////////////////////////////////

////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// 
////////////////////////////////////////

////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// 
////////////////////////////////////////

////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// 
////////////////////////////////////////

////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// 
////////////////////////////////////////

////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// 
////////////////////////////////////////

////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// 
////////////////////////////////////////

////////////////////////////////////////
////////////////////////////////////////


////////////////////////////////////////
// 
////////////////////////////////////////

////////////////////////////////////////
////////////////////////////////////////