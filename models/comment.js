var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({

	//login is an array that stores object ids
	//the ref property links these object ids to the Login schema
	//this will let us link the comment schema with the login schema
	login: [{
		type: Schema.Types.ObjectId,
		ref: "Login"
	}],
	
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

