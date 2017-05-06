/*
    Handle Incoming Requests for Items
*/
console.log("/server/controllers/items.js");

var mongoose = require("mongoose");
var Item = mongoose.model("Item");


// Test Creating Item
var item = new Item({
    title: "Test Item",
    dueDate: new Date()
});
item.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully Created Item!", item);
    }
});
