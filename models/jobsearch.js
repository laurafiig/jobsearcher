var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var JobSchema = new Schema({
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
	HowApp: {
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