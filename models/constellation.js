var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var User = require('./user');

var schema = new Schema({
	url: {type: String, requried: true},
	name: {type: String, required: true},
	user: {type: Schema.Types.ObjectId, ref: 'User'}
})



module.exports = mongoose.model('Constellation', schema);