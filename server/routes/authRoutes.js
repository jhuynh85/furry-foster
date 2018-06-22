const passport = require("passport");

module.exports = app => {
	//---------GOOGLE AUTHENTICATION ROUTES---------//
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get("/auth/google/callback", passport.authenticate("google"));
};
