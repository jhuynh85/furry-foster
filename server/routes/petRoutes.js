const passport = require("passport");
const Pet = require("../models/Pet");

module.exports = app => {
	const requireJWT = passport.authenticate("jwt", { session: false });
	app.post("/addpet", requireJWT, function(req, res, next) {
		const pet = req.body;

		if (!pet.name) {
			return res.status(422).send({ error: "You must provide a pet name" });
		}
		if (!pet.type) {
			return res.status(422).send({ error: "You must specify an animal type" });
		}

		// If given email does not exist, create and save rescue record
		const newPet = new Pet(pet);
		newPet.save(function(err) {
			if (err) return next(err);
			res.json({ pet: newPet });
		});
	});
};
