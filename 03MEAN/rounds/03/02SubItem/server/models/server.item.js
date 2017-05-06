console.log('server.item.js');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SubItemSchema = require('./server.subItem');

var itemSchema = new Schema({
    title: String,
    body: String,
    subItems: [SubItemSchema]
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);