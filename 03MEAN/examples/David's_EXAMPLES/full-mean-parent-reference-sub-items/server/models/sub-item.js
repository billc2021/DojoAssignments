/*
    SubItem DB Model
*/
console.log("/server/models/sub-item.js");

var mongoose = require("mongoose");

var subItemSchema = mongoose.Schema({
    content: String,
    _parent: { type: mongoose.Schema.Types.ObjectId, ref: "Item" }
}, { timestamps: true });

mongoose.model("SubItem", subItemSchema);