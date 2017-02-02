var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
	username: {
		type: String
	},
	password: {
		type: String
	}
});

var Login = mongoose.model("Login", LoginSchema);
module.exports = Login;