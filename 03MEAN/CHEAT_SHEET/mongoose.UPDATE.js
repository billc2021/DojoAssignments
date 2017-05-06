var Todo = require("../models/todo");

//////////////////////////////////////
// CREATE
//////////////////////////////////////
// This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
// Find the existing resource by ID
Todo.findById(req.params.todoId, function (err, todo) {  
    // Handle any possible database errors
    if (err) {
        res.status(500).send(err);
    } else {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.
        todo.title = req.body.title || todo.title;
        todo.description = req.body.description || todo.description;
        todo.price = req.body.price || todo.price;
        todo.completed = req.body.completed || todo.completed;

        // Save the updated document back to the database
        todo.save(function (err, todo) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(todo);
        });
    }
});
/////////////////////////////////////////