var mongoose = require('mongoose');
var User = require('./user');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
	content: {type: String},
	date: {type: String},
	user: {type: Schema.Types.ObjectId, ref: "User"}
});

commentSchema.post('remove', function(comment) {
	User.findById(comment.user, function(err, user) {
		user.comments.pull(comment._id);
		user.save();
	});
});

module.exports = mongoose.model("Comment", commentSchema);