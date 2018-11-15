const passport = require("passport");
const Pet = require("../models/Pet");
const Rescue = require("../models/Rescue");

module.exports = function(app) {
	// JWT middleware for protected routes
	const requireJWT = passport.authenticate("jwt", { session: false });

	// Returns all pets for a specific rescue
	app.get("/api/getpets/:rescueID", function(req, res, next) {
		Rescue.find({ _id: req.params.rescueID })
			.populate("pets")
			.exec(function(err, pets) {
				if (err) return next(err);
				res.json(pets);
			});
	});

	// Retrieve a specified rescue. Otherwise, get all rescues
	app.get("/api/rescue/:rescueID?", function(req, res, next) {
		let query = req.params.rescueID ? { _id: req.params.rescueID } : {};
		Rescue.find(query, function(err, rescues) {
			if (err) return next(err);
			res.json(rescues);
		});
	});

	// Updates specified rescue
	app.patch("/api/update/rescue/:rescueID", requireJWT, function(req, res) {
		Rescue.findByIdAndUpdate(req.params.rescueID, { $set: req.body }, { new: true })
			.then(function(updatedRescue) {
				console.log("Success, rescue updated: ", JSON.stringify(updatedRescue, null, 2));
				res.json(updatedRescue);
			})
			.catch(function(err) {
				res.json(err);
			});
	});
};
