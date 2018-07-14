const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

// Define model
const RescueSchema = new Schema(
	{
		orgName: { type: String, required: true },
		orgEmail: { type: String, lowercase: true },
		phone: { type: String },
		email: { type: String, unique: true, lowercase: true, required: true },
		password: { type: String, required: true },
		address1: { type: String },
		address2: String,
		city: { type: String },
		state: { type: String },
		zip: { type: Number },
		websiteURL: { type: String, lowercase: true },
		ein: { type: String, unique: true, required: true },
		images: [{ type: String }],
		description: String,
		fosterRequirements: String,
		facebookURL: { type: String, lowercase: true },
		twitterURL: { type: String, lowercase: true },
		instagramURL: { type: String, lowercase: true },
		isApproved: { type: Boolean, default: true }, // Set default to false if rescues need to be approved first
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

// Function to check if given password matches this model's password
RescueSchema.methods.comparePassword = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) return callback(err);

		callback(null, isMatch);
	});
};

// Create and export model class
module.exports = mongoose.model("Rescue", RescueSchema);
