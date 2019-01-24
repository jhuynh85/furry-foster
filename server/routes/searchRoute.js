const Pet = require("../models/Pet");

// Get constants
const animalTypes = require("../../src/assets/js/animalTypes").types;
const ageBrackets = require("../../src/assets/js/ageBrackets");
const sizeBrackets = require("../../src/assets/js/sizeBrackets");

module.exports = function(app) {
	app.get("/api/search", function(req, res, next) {
		const type = req.query.type;
		const breed = req.query.breed;
		const size = req.query.size;
		const age = req.query.age;
		const gender = req.query.gender;

		// Check for valid animal type
		if (!type) {
			res.status(400).send("Animal type required!");
			return;
		} else if (type && animalTypes.indexOf(type) < 0) {
			res.status(400).send("Invalid animal type!");
			return;
		}

		const breeds = require("../../src/assets/js/breeds")[type];

		// Check for valid breed
		if (breed && breeds.indexOf(breed) < 0) {
			res.status(400).send("Invalid breed!");
			return;
		}

		// Check for valid size
		if (size) {
			if (size !== "xlarge" && size !== "large" && size !== "medium" && size !== "small") {
				res.status(400).send("Invalid size!");
				return;
			}
		}

		// Check for valid age
		if (age) {
			if (age !== "senior" && age !== "adult" && age !== "young" && age !== "baby") {
				res.status(400).send("Invalid age!");
				return;
			}
		}

		// Check for valid gender
		if (gender) {
			if (gender !== "male" && gender !== "female") {
				res.status(400).send("Invalid gender!");
				return;
			}
		}

		// Get all pets of [type] and filter results
		Pet.find({ type }, null, null, function(err, pets) {
			let filteredPets = pets.filter(pet => {
				// Check if pet contains breed
				if (breed && pet.breed && pet.breed.indexOf(breed) < 0) {
					return false;
				}

				// Check size
				if (size && pet.size) {
					if (size === "xlarge" && pet.weightInOz < sizeBrackets.xlarge) {
						return false;
					}
					if (
						size === "large" &&
						(pet.weightInOz < sizeBrackets.large || pet.weightInOz >= sizeBrackets.xlarge)
					) {
						return false;
					}
					if (
						size === "medium" &&
						(pet.weightInOz < sizeBrackets.medium || pet.weightInOz >= sizeBrackets.large)
					) {
						return false;
					}
					if (size === "small" && pet.weightInOz >= sizeBrackets.medium) {
						return false;
					}
				}

				// Check age
				if (age && pet.age) {
					if (age === "senior" && pet.ageInMonths < ageBrackets.senior) {
						return false;
					}
					if (
						age === "adult" &&
						(pet.ageInMonths < ageBrackets.adult || pet.ageInMonths >= ageBrackets.senior)
					) {
						return false;
					}
					if (
						age === "young" &&
						(pet.ageInMonths < ageBrackets.young || pet.ageInMonths >= ageBrackets.adult)
					) {
						return false;
					}
					if (age === "baby" && pet.ageInMonths >= ageBrackets.young) {
						return false;
					}
				}

				// Check gender
				if (gender && pet.gender && pet.gender !== gender) {
					return false;
				}

				// Check availability?
				return true;
			});
			res.json(filteredPets);
		});
	});
};
