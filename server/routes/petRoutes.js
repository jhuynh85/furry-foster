const passport = require("passport");
const Pet = require("../models/Pet");
const Rescue = require("../models/Rescue");

module.exports = function(app) {
	// JWT middleware for protected routes
	const requireJWT = passport.authenticate("jwt", { session: false });

	// Add a pet to the DB
	app.post("/addpet", requireJWT, function(req, res, next) {
		const pet = req.body;

		if (!pet.name) {
			return res.status(422).send({ error: "You must provide a pet name" });
		}
		if (!pet.type) {
			return res.status(422).send({ error: "You must specify an animal type" });
		}

		const newPet = new Pet(pet);
		newPet.save(function(err, doc) {
			if (err) return next(err);
			// Add pet to Rescue
			Rescue.findByIdAndUpdate(
				pet.rescue,
				{
					$push: {
						pets: doc._id
					}
				},
				{ new: true },
				(err, updatedRescue) => {
					// Send any errors to the browser
					if (err) {
						console.log("Error: ", err);
						res.send(err);
					} else {
						console.log("Pet added to rescue: ", JSON.stringify(updatedRescue, null, 2));
						// Or send the doc (newly-added pet) to the browser
						res.json(doc);
					}
				}
			);
		});
	});

	// Retrieve a specified pet. Otherwise, get all pets
	app.get("/getpet", function(req, res, next) {
		Pet.find({}, function(err, pets) {
			if (err) return next(err);
			res.json(pets);
		});
	});

	// Updates specified pet
	app.patch("/api/update/pet/:petID", requireJWT, function(req, res) {
		Pet.findByIdAndUpdate(req.params.petID, req.body, { new: true })
			.then(function(updatedPet) {
				console.log("Success, pet updated: ", JSON.stringify(updatedPet, null, 2));
				res.json(updatedPet);
			})
			.catch(function(err) {
				res.json(err);
			});
	});
};
