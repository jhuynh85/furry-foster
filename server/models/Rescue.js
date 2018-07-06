const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

// Define model
const RescueSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, unique: true, lowercase: true, required: true },
		password: { type: String, required: true },
		address1: { type: String, required: true },
		address2: String,
		city: { type: String, required: true },
		state: { type: String, required: true },
		zip: { type: Number, required: true },
		websiteURL: String,
		ein: { type: String, required: true },
		images: [{ type: String }],
		description: String,
		fosterRequirements: String,
		facebookURL: String,
		twitterURL: String,
		instagramURL: String,
		pets: [{ type: Schema.Types.ObjectId, ref: "Pet" }]
	},
	{
		timestamps: true
	}
);

// On save hook, encrypt password
// Runs before saving a model
RescueSchema.pre("save", function(next) {
	// Get access to user model
	const rescue = this; // rescue.email, rescue.password

	// Generate salt
	bcrypt.genSalt(10, function(err, salt) {
		if (err) return next(err);
		// Hash user password using generated salt
		bcrypt.hash(rescue.password, salt, null, function(err, hash) {
			if (err) return next(err);
			// Overwrite plaintext password with encrypted password
			rescue.password = hash;
			next();
		});
	});
});

RescueSchema.methods.comparePassword = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) return callback(err);

		callback(null, isMatch);
	});
};

// Create and export model class
module.exports = mongoose.model("Rescue", RescueSchema);
