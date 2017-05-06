var mongoose = require("mongoose");

var CommentSchema = mongoose.Schema({
    content: String,
}, { timestamps: true });

mongoose.model("Comment", CommentSchema);
module.exports = CommentSchema;