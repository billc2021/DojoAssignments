var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: { type: String, lowercase: true },
    age: Number, 
}, { timestamps: true });

module.exports = mongoose.model('Item', ItemSchema);
