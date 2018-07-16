var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    userid:{type:String},
    swimlane: {type: String, required: true},
    name: {type: String}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Board', schema);