const jwt = require("jwt-simple");
const User = require("../models/User");

// Create JWT token
function tokenForUser(user) {
	const timeStamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timeStamp }, process.env.JWT_SECRET);
}

// Sign up function for creating a new user
exports.signup = function(req, res, next) {
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		return res.status(422).send({ error: "You must provide an email and a password" });
	}

	// Check if user with given email exists
	User.findOne({ email: email }, function(err, existingUser) {
		if (err) return next(err);
		// If a user with email exists, return error
		if (existingUser) {
			return res.status(422).send({ error: "Email is in use" });
		}

		// If given email does not exist, create and save user record
		const newUser = new User({
			email: email,
			password: password
		});
		newUser.save(function(err) {
			if (err) return next(err);
			// Respond to request with JWT token
			res.json({ token: tokenForUser(newUser) });
		});
	});
};

// Signin function
exports.signin = function(req, res, next) {
	// User has already had their email and password auth'd
	// We just need to give them a token
	res.send({ token: tokenForUser(req.user) });
};
