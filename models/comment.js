var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
	time: {type: Date},
	content: {type: String},
	stars: {type: Number},
	user: {type: Schema.Types.ObjectId, ref: "User"}
})

module.exports = mongoose.model("Comment", commentSchema);