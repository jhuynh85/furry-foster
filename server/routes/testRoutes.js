module.exports = function(app) {
	app.get("/api/test", function(req, res, next) {
		res.json({ test: ["waterbottle", "phone", "paper"] });
	});
};
