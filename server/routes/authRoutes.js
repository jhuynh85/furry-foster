const passport = require("passport");
const Authentication = require("../controllers/authentication");

module.exports = app => {
	//--------- EMAIL/PASSWORD AUTHENTICATION ROUTES ---------//
	const requireUserSignin = passport.authenticate("userLocal", { session: false });
	app.post("/signin/user", requireUserSignin, Authentication.signin);
	app.post("/signup/user", Authentication.signupUser);

	const requireRescueSignin = passport.authenticate("rescueLocal", { session: false });
	app.post("/signin/rescue", requireRescueSignin, Authentication.signin);
	app.post("/signup/rescue", Authentication.signupRescue);

	//--------- JWT-PROTECTED ROUTES ---------//
	const requireJWT = passport.authenticate("jwt", { session: false });

	app.post("/edit/user/:userID", requireJWT, function(req, res) {
		res.json({ success: true });
	});

	app.post("/edit/rescue/:rescueID", requireJWT, function(req, res) {
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
