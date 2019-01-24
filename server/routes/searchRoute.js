const Pet = require("../models/Pet");

// Get constants
const animalTypes = require("../../src/assets/js/animalTypes").types;
const ageBrackets = require("../../src/assets/js/ageBrackets");
const sizeBrackets = require("../../src/assets/js/sizeBrackets");

module.exports = function(app) {
	app.get("/api/search", function(req, res, next) {
		let query = {};
		const type = req.query.type || "";
		const breed = req.query.breed;
		const size = req.query.size;
		const age = req.query.age;
		const gender = req.query.gender;

		// Check animal type (if specified)
		if (type && animalTypes.indexOf(type) < 0) {
			res.status(400).send("Invalid animal type!");
			return;
		}

		query["type"] = type;
		const breeds = require("../../src/assets/js/breeds")[type];

		// Check breed (if specified)
		if (breed && breeds.indexOf(breed) < 0) {
			res.status(400).send("Invalid breed!");
			return;
		}

		if (breed) {
			query["breed"] = breed;
		}

		if (size) {
			if (size === "xlarge") {
				query["weightInOz"] = {
					$or: [null, { $gte: sizeBrackets.xlarge }]
				};
			} else if (size === "large") {
				query["weightInOz"] = {
					$not: { $and: [{ $lt: sizeBrackets.xlarge }, { $gte: sizeBrackets.large }] }
				};
			} else if (size === "medium") {
				query["weightInOz"] = {
					$not: { $and: [{ $lt: sizeBrackets.large }, { $gte: sizeBrackets.medium }] }
				};
			} else if (size === "small") {
				query["weightInOz"] = {
					$not: { $and: [{ $lt: sizeBrackets.medium }, { $gte: 0 }] }
				};
			}
		}

		if (age) {
			query["age"] = age;
		}

		if (gender) {
			query["gender"] = gender;
		}

		console.log(query);

		Pet.find(query, null, null, function(err, docs) {
			res.json(docs);
		});
	});
};
