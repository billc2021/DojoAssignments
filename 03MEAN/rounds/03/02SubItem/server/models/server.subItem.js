console.log('server.subItem.js');

var mongoose = require('mongoose')

var subItemSchema = mongoose.Schema({
    content: String
}, { timestamps: true});

mongoose.model('SubItem', subItemSchema);

module.exports = subItemSchema;