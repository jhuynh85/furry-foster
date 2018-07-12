const User = require("../models/User");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// Local Strategy for authenticating email/password login
//------------ USER AUTHENTICATION ----------//
passport.use(
	"userLocal",
	new LocalStrategy({ usernameField: "email" }, function(email, password, doneCallback) {
		// Verify email and password
		User.findOne({ email: email }, function(err, user) {
			if (err) return doneCallback(err);
			// Email not found
			if (!user) return doneCallback(null, false, { error: "Email does not exist" });

			// Compare passwords
			user.comparePassword(password, function(err, isMatch) {
				if (err) return doneCallback(err);
				// Password incorrect
				if (!isMatch) return doneCallback(null, false, { error: "Incorrect password" });
				// Email and password matches
				return doneCallback(null, user);
			});
		});
	})
);

//------------ RESCUE AUTHENTICATION ----------//
passport.use(
	"rescueLocal",
	new LocalStrategy({ usernameField: "email" }, function(email, password, doneCallback) {})
);

// JWT Strategy for authenticating JWT tokens
passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromHeader("authorization"),
			secretOrKey: process.env.JWT_SECRET
		},
		function(payload, doneCallback) {
			console.log("JWT payload: ", payload);

			// Check if user ID in payload exists
			User.findById(payload.sub, function(err, user) {
				if (err) return doneCallback(err, false);
				// If it exists, call "doneCallback" with that
				if (user) {
					doneCallback(null, user);
				}
				// Otherwise, call "doneCallback" without a user object
				else {
					doneCallback(null, false);
				}
			});
		}
	)
);

// Google Strategy for authenticating Google login
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback"
		},
		(accessToken, refreshToken, profile, done) => {
			console.log("access token: ", accessToken);
			console.log("refresh token: ", refreshToken);
			console.log("profile: ", profile);
		}
	)
);
