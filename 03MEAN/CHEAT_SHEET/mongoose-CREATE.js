var Todo = require("../models/todo");

//////////////////////////////////////
// CREATE
//////////////////////////////////////
// Assuming this is from a POST request and the body of the
// request contained the JSON of the new "todo" item to be saved
var todo = new Todo(req.body);  
todo.save(function (err, createdObject) {  
    if (err) {
        res.send(err);
    }
    // This createdObject is the same one we saved, but after Mongo
    // added its additional properties like _id.
    res.send(createdObject);
});
/////////////////////////////////////////