const Article = require("../models/Article");

module.exports = function(app) {
	// Retrieve a specified article. Otherwise, get all articles
	app.get("/api/article/:articleID", function(req, res, next) {
		let query = req.params.articleID ? { _id: req.params.articleID } : {};
		Article.find(query).exec(function(err, articles) {
			if (err) return next(err);
			res.json(articles);
		});
	});
};
