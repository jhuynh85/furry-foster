const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define model
const PetSchema = new Schema(
	{
		name: { type: String, required: true },
		type: { type: String, required: true },
		description: String,
		features: { type: String, required: true },
		images: [{ type: String }],
		breeds: [{ type: String }],
		ageInMonths: Number,
		gender: String,
		color: [{ type: String }],
		weightInOz: Number,
		availability: String,
		rescue: { type: Schema.Types.ObjectId, ref: "Rescue" }
	},
	{ timestamps: true }
);

// Create and export model class
module.exports = mongoose.model("Pet", PetSchema);
