/*
    Item DB Model
*/
console.log("/server/models/item.js");

var mongoose = require("mongoose");
var subItemSchema = require("./sub-item");

var itemSchema = mongoose.Schema({
    title: String,
    subItems: [subItemSchema]
}, { timestamps: true });
mongoose.model("Item", itemSchema);