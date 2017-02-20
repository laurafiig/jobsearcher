var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var JobSchema = new Schema({

	//login is an array that stores object ids
	//the ref property links these object ids to the Login schema
	//this will let us link the job schema with the login schema
	login: [{
		type: Schema.Types.ObjectId,
		ref: "Login"
	}],
	compName: {
		type: String
	},
	position: {
		type: String
	},
	link: {
		type: String
	},
	appDate: {
		type: String
	},
	howApp: {
		type: String
	},
	appContact: {
		type: String
	},
	phoneDate: {
		type: String
	},
	phoneCont: {
		type: String
	},
	phoneResult: {
		type: String
	},
	intDate: {
		type: String
	},
	intContact: {
		type: String
	},
	intResult: {
		type: String
	},
	offerDate: {
		type: String
	},
	accepted: {
		type: Boolean
	},
	rejectDate: {
		type: String
	},
	method: {
		type: String
	}
});

var Job = mongoose.model("Job", JobSchema);
module.exports = Job;