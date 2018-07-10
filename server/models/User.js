const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

// Define model
const UserSchema = new Schema(
	{
		email: { type: String, unique: true, lowercase: true, required: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, default: false }
	},
	{ timestamps: true }
);

// On save hook, encrypt password
// Runs before saving a model
UserSchema.pre("save", function(next) {
	// Get access to user model
	const user = this; // user.email, user.password

	// Generate salt
	bcrypt.genSalt(10, function(err, salt) {
		if (err) return next(err);
		// Hash user password using generated salt
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) return next(err);
			// Overwrite plaintext password with encrypted password
			user.password = hash;
			next();
		});
	});
});

UserSchema.methods.comparePassword = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) return callback(err);

		callback(null, isMatch);
	});
};

// Create and export model class
module.exports = mongoose.model("User", UserSchema);
