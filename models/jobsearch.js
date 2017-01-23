var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var JobSchema = new Schema({
	Company: {
		type: String
	},
	Title: {
		type: String
	},
	Link: {
		type: String
	},
	AppDate: {
		type: Date
	},
	HowApp: {
		type: String
	},
	Contact: {
		type: String
	},
	PhoneDate: {
		type: Date
	},
	ContactPhone: {
		type: String
	},
	ResultPhone: {
		type: String
	},
	InterviewDate: {
		type: Date
	},
	ContactInt: {
		type: String
	},
	ResultInt: {
		type: String
	},
	OfferDate: {
		type: Date
	},
	Accepted: {
		type: Boolean
	},
	RejectDate: {
		type: Date
	},
	RejectMethod: {
		type: String
	}
});

var Job = mongoose.model("Job", JobSchema);
module.exports = Job;