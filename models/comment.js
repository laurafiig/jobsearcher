var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	AppNum: {
		type: Number
	},
	stage: {
		type: String
	},
	comment: {
		type: String
	}
});

var Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;