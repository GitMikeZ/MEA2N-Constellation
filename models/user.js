var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongooseUniqueValidator = require('mongoose-unique-validator');

var userSchema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	password: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	constellations: [{type: Schema.Types.ObjectId, ref: "Constellation"}],
	comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("User", userSchema);

