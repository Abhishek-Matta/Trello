var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    userid:{type:String},
    swimlane: [{
        name:{type:String},
        card:[{
            name:{type:String}
        }]
    }],
    name: {type: String,required:true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Board', schema);