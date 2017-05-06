/*
    SubItem DB Model
*/
console.log("/server/models/sub-item.js");

var mongoose = require("mongoose");

var subItemSchema = mongoose.Schema({
    content: String,
}, { timestamps: true });

mongoose.model("SubItem", subItemSchema);
module.exports = subItemSchema;