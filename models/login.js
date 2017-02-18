var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
	//username shoule be a unique string
	username: {
		type: String,
		unique: true
	},
	password: {
		type: String
	}
});

//NOTE: the login ID is stored automatically
//Job and Comment schemas will have an array to store these ids
var Login = mongoose.model("Login", LoginSchema);
module.exports = Login;