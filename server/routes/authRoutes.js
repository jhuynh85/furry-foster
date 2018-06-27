const passport = require("passport");

module.exports = app => {
	//---------JWT AUTHENTICATION ROUTES---------//
	const requireAuth = passport.authenticate("jwt", { session: false });

	app.get("/auth/jwt", requireAuth, function(req, res) {
		res.json({ success: true });
	});

	//---------GOOGLE AUTHENTICATION ROUTES---------//
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get("/auth/google/callback", passport.authenticate("google"));
};
