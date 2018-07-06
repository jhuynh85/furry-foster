const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define model
const PetSchema = new Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	description: String,
	features: { type: String, required: true },
	images: [{ type: String }],
	breeds: [{ type: String }],
	age: Number,
	gender: String,
	color: [{ type: String }],
	weight: Number,
	availability: String,
	rescue: { type: Schema.Types.ObjectId, ref: "Rescue" }
});

// Create and export model class
module.exports = mongoose.model("Pet", PetSchema);
