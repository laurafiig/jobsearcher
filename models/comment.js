var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	subject: {
		type: String
	},
	
	compPos: {
		type: String
	},
	
	phase: {
		type: String
	},
	
	comment: {
		type: String
	}
});

var Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;

