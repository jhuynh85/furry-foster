const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define model
const ArticleSchema = new Schema(
	{
		createDate: {
			type: Date,
			required: false,
			default: Date.now
		},
		title: {
			type: String,
			required: true
		},
		body: {
			type: String,
			required: true
		},
		author: {
			type: String,
			required: false,
			default: "anonymous"
		}
	},
	{ timestamps: true }
);

// Create and export model class
module.exports = mongoose.model("Article", ArticleSchema);
