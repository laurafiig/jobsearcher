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
	company: {
		type: String
	},
	title: {
		type: String
	},
	link: {
		type: String
	},
	dateApp: {
		type: String
	},
	howApp: {
		type: String
	},
	contactApp: {
		type: String
	},
	datePhone: {
		type: String
	},
	contactPhone: {
		type: String
	},
	resultPhone: {
		type: String
	},
	dateInt: {
		type: String
	},
	contactInt: {
		type: String
	},
	resultInt: {
		type: String
	},
	dateOffer: {
		type: String
	},
	Accept: {
		type: Boolean
	},
	dateRej: {
		type: String
	},
	howRej: {
		type: String
	}
});

var Job = mongoose.model("Job", JobSchema);
module.exports = Job;