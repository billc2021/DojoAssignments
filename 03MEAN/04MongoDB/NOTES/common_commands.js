//Common Mongoose Commands

//////////////////////////////////////////////////////////
// Create a Schema for Users
//////////////////////////////////////////////////////////
var UserSchema = new mongoose.Schema({
 name: {type: String},
 age: {type: Number}
}, {timestamps: true})
// Store the Schema under the name 'User'
mongoose.model('User', UserSchema);
// Retrieve the Schema called 'User' and store it to the variable User
var User = mongoose.model('User');
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
//Finding all users
//////////////////////////////////////////////////////////
// Using the User Schema...
// ...retrieve all records matching {}
User.find({}, function(err, users) {
 // Retrieve an array of users
 // This code will run when the DB is done attempting to retrieve all matching records to {}
})
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
//Finding all users based on a requirement
//////////////////////////////////////////////////////////
// ...retrieve all records matching {name:'Jessica'}
User.find({name:'Jessica'}, function(err, user) {
 // Retrieve an array of users matching the name. Even if 1 record is found, the result will be an array the size of 1, with 1 object inside. (Notice, if we are expecting to retrieve one record, we may want to use findOne and retrieve the object as oppose to an array the size of one.
 // This code will run when the DB is done attempting to retrieve all matching records to {name:'Jessica'}
})
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
//Finding one user
//////////////////////////////////////////////////////////
// ...retrieve 1 record (the first record found) matching {} 
User.findOne({}, function(err, user) {
 // Retrieve 1 object
 // This code will run when the DB is done attempting to retrieve 1 record.
})
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
//Let's create a sample user
//////////////////////////////////////////////////////////
// ...create a new instance of the User Schema and save it to the DB.
var userInstance = new User()
userInstance.name = 'Andriana'
userInstance.age = 29
userInstance.save(function(err){
 // This code will run when Mongo has attempted to save the record.
 // If (err) exists, the record was not saved, and (err) contains validation errors.
 // If (err) does not exist (undefined), Mongo saved the record successfully.
})
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
//Delete all users
//////////////////////////////////////////////////////////
// ...delete all records of the User Model
User.remove({}, function(err){
 // This code will run when the DB has attempted to remove all matching records to {}
})
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
//Delete one user
//////////////////////////////////////////////////////////
// ...delete 1 record by a certain key/vaue.
User.remove({_id: 'insert record unique id here'}, function(err){
 // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
})
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
//Update any records
//////////////////////////////////////////////////////////
// ...update any records that match the query
User.update({name:'Andrinnna'}, {name:'Andriana'}, function(err){
 // This code will run when the DB has attempted to update the matching record.
})
// another way to update a record
User.findOne({name: 'Andriana'}, function(err, user){
 user.name = 'Andri'
 user.save(function(err){
     // if save was successful awesome!
 })
})
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
// ASSOCIATIONS (Establishing a One-to-Many relationship)
//////////////////////////////////////////////////////////
// Before you define your models, you must establish a  Schema variable
var Schema = mongoose.Schema;

////////////////////////////
// Post Model
////////////////////////////
var Schema = mongoose.Schema;
var postSchema = new mongoose.Schema({
 text: { type: String, required: true }, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });
// The 'type' property of the object inside of the array is an attribute
// that tells Mongoose what to look for.

////////////////////////////
// Comment Model
////////////////////////////
// What would we need to add to make the below snippet work properly? Read your console!
var commentSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 text: { type: String, required: true },
}, {timestamps: true });

///////////////////////////////
// Retrieving the data
///////////////////////////////
/*
    We're going to query our data a little bit differently than we have before, but the changes aren't huge. The important methods here are the   .populate() method and the .exec() method. The .populate() method basically tells your post model to gather the associated comments and the .exec() method actually fires the action.
*/

////////////////
// Here is how to get the comments for one post:
////////////////
// just an example route, your routes may look different
app.get('/posts/:id', function (req, res){
// the populate method is what grabs all of the comments using their IDs stored in the 
// comment property array of the post document!
 Post.findOne({_id: req.params.id})
 .populate('comments')
 .exec(function(err, post) {
      res.render('post', {post: post});
        });
});

////////////////
// Adding a comment
////////////////
//  just a sample route.  Post request to update a post.
//  your routes will probably look different.
app.post('/posts/:id', function (req, res){
Post.findOne({_id: req.params.id}, function(err, post){
    // data from form on the front end
    var comment = new Comment(req.body);
    //  set the reference like this:
    comment._post = post._id;
    // now save both to the DB
    comment.save(function(err){
            post.comments.push(comment);
            post.save(function(err){
                    if(err) {
                        console.log('Error');
                    } else {
                        res.redirect('/');
                    }
                });
        });
});
});


///////////////////////////////
// Here it is all together.
///////////////////////////////
// define Schema variable
var Schema = mongoose.Schema;
// define Post Schema
var PostSchema = new mongoose.Schema({
 text: {type: String, required: true }, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });
// define Comment Schema
var CommentSchema = new mongoose.Schema({
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 text: {type: String, required: true }
}, {timestamp: true });
// set our models by passing them their respective Schemas
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
// route for getting a particular post and comments
app.get('/posts/:id', function (req, res){
 Post.findOne({_id: req.params.id})
 .populate('comments')
 .exec(function(err, post) {
      res.render('post', {post: post});
        });
});
// route for creating one comment with the parent post id
app.post('/posts/:id', function (req, res){
  Post.findOne({_id: req.params.id}, function(err, post){
         var comment = new Comment(req.body);
         comment._post = post._id;
         post.comments.push(comment);
         comment.save(function(err){
                 post.save(function(err){
                       if(err) { console.log('Error'); } 
                       else { res.redirect('/'); }
                 });
         });
   });
 });

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////