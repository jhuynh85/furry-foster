const jwt = require("jwt-simple");
const User = require("../models/User");
const Rescue = require("../models/Rescue");

// Create JWT token
function tokenForUser(user) {
	const timeStamp = new Date().getTime();
	const payload = {
		sub: user.id,
		iat: timeStamp
	};
	return jwt.encode(payload, process.env.JWT_SECRET);
}

//----------- USER FUNCTIONS -----------//

// Sign up function for creating a new user
exports.signupUser = function(req, res, next) {
	const { email, password } = req.body;

	if (!email) {
		return res.status(422).send({ error: "You must provide an email" });
	}
	if (!password) {
		return res.status(422).send({ error: "You must provide a password" });
	}

	// Check if user with given email exists
	User.findOne({ email }, function(err, existingUser) {
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
			res.json({ id: newUser.id, token: tokenForUser(newUser) });
		});
	});
};

// Signin function (for BOTH User and Rescue)
exports.signin = function(req, res, next) {
	// User has already had their email and password auth'd
	// We just need to give them a token
	// console.log("Signed in userId: ", req.user.id);
	res.json({ id: req.user.id, token: tokenForUser(req.user) });
};

//--------- RESCUE FUNCTIONS ---------//

// Sign up function for creating a new rescue
exports.signupRescue = function(req, res, next) {
	const {
		orgName,
		orgEmail,
		phone,
		email,
		password,
		address1,
		address2,
		city,
		state,
		zip,
		websiteURL,
		ein
	} = req.body;

	if (!orgName) {
		return res.status(422).send({ error: "You must provide an organization name" });
	}
	if (!email) {
		return res.status(422).send({ error: "You must provide an account email" });
	}
	if (!password) {
		return res.status(422).send({ error: "You must provide a password" });
	}
	if (!ein) {
		return res.status(422).send({ error: "You must provide an EIN" });
	}

	// Check if rescue with given email exists
	Rescue.findOne({ email }, function(err, existingRescue) {
		if (err) return next(err);
		// If a rescue with email exists, return error
		if (existingRescue) {
			return res.status(422).send({ error: "Email is in use" });
		}

		// If given email does not exist, create and save rescue record
		const newRescue = new Rescue({
			orgName,
			orgEmail,
			phone,
			email,
			password,
			address1,
			address2,
			city,
			state,
			zip,
			websiteURL,
			ein
		});
		newRescue.save(function(err) {
			if (err) return next(err);
			// Respond to request with JWT token
			res.json({ id: newRescue.id, token: tokenForUser(newRescue) });
		});
	});
};
