const passport = require("passport");
const Authentication = require("../controllers/authentication");

module.exports = app => {
	//--------- EMAIL/PASSWORD AUTHENTICATION ROUTES ---------//
	const requireSignin = passport.authenticate("local", { session: false });

	app.post("/signin", requireSignin, Authentication.signin);
	app.post("/signup", Authentication.signup);

	//--------- JWT AUTHENTICATION ROUTES ---------//
	const requireAuth = passport.authenticate("jwt", { session: false });

	app.get("/someProtectedPath", requireAuth, function(req, res) {
		res.json({ success: true });
	});

	//--------- GOOGLE AUTHENTICATION ROUTES ---------//
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get("/auth/google/callback", passport.authenticate("google"));
};
