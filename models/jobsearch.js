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
		type: Date
	},
	HowApp: {
		type: String
	},
	contactApp: {
		type: String
	},
	datePhone: {
		type: Date
	},
	contactPhone: {
		type: String
	},
	resultPhone: {
		type: String
	},
	dateInt: {
		type: Date
	},
	contactInt: {
		type: String
	},
	resultInt: {
		type: String
	},
	dateOffer: {
		type: Date
	},
	Accept: {
		type: Boolean
	},
	dateRej: {
		type: Date
	},
	howRej: {
		type: String
	}
});

var Job = mongoose.model("Job", JobSchema);
module.exports = Job;