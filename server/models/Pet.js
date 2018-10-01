const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define model
const PetSchema = new Schema(
	{
		name: { type: String, required: true },
		type: { type: String, required: true },
		description: String,
		gender: String,
		weightInOz: Number,
		ageInMonths: Number,
		breed: [{ type: String }],
		color: [{ type: String }],
		features: [{ type: String }],
		images: [{ type: String }],
		availability: [{ type: String }],
		rescue: { type: Schema.Types.ObjectId, ref: "Rescue", required: true },
		active: { type: Boolean, default: true }
	},
	{ timestamps: true }
);

// Create and export model class
module.exports = mongoose.model("Pet", PetSchema);
