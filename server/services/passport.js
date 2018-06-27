const User = require("../models/User");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

// Create JWT Strategy
passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromHeader("authorization"),
			secretOrKey: process.env.JWT_SECRET
		},
		function(payload, doneCallback) {
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

// Create Google strategy
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
