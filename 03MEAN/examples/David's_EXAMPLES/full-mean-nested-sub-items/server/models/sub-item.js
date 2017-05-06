/*
    SubItem DB Model
*/
console.log("/server/models/sub-item.js");

var mongoose = require("mongoose");

var subItemSchema = mongoose.Schema({
    content: String,
}, { timestamps: true });

module.exports = subItemSchema;