console.log('/server/models/NAME_OF_MODEL_FILE.js');

var mongoose = require('mongoose');

// Example: itemSchema = mongoose.Schema
var NAME_OF_Schema = mongoose.Schema({
    NAME_OF_STRING: String,
    NAME_OF_DATE: Date,
    NAME_OF_NUMBER: Number,
    NAME_OF_BOOLEAN: Boolean,
}, { timestamp: true } );

// Example mongoose.model('Item', itemSchema)
mongoose.model('NAME_OF_MODEL(in caps)', NAME_OF_SCHEMA_Schema) 