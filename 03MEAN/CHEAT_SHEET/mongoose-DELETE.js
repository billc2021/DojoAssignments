var Todo = require("../models/todo");

//////////////////////////////////////
// DELETE
//////////////////////////////////////
// The "todo" in this callback function represents the document that was found.
// It allows you to pass a reference back to the client in case they need a reference for some reason.
Todo.findByIdAndRemove(req.params.todoId, function (err, todo) {  
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    var response = {
        message: "Todo successfully deleted",
        id: todo._id
    };
    res.send(response);
});
/////////////////////////////////////////