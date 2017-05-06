var mongoose = require("mongoose");
var CommentSchema = require("./comment");

var MessageSchema = mongoose.Schema({
    title: String,
    comment: [CommentSchema]
}, { timestamps: true });
mongoose.model("Message", MessageSchema);