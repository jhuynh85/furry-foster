const AWS = require("aws-sdk");

//=============== AWS CONFIGURATION ===============//
// configure the keys for accessing AWS
AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: "us-west-1"
});

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = function(id, path, data, cb) {
	const base64Data = new Buffer(data.replace(/^data:image\/\w+;base64,/, ""), "base64");

	// Getting the file type, ie: jpeg, png or gif
	const type = data.split(";")[0].split("/")[1];

	const params = {
		ACL: "public-read",
		Body: base64Data,
		Bucket: process.env.S3_BUCKET_NAME,
		ContentEncoding: "base64",
		ContentType: `image/${type}`,
		Key: path
	};

	console.log("key: ", path);
	console.log("bucket: ", process.env.S3_BUCKET_ARN);
	console.log("type: ", `image/${type}`);
	s3.upload(params, function(err, data) {
		cb(err, data);
	});
};

// Define POST route
module.exports = function(app) {
	app.post("/upload/image/rescue", function(req, res) {});

	app.post("/upload/image/pet", function(req, res) {
		// console.log("req: ", req.body);
		const { id, path, data } = req.body;
		uploadFile(id, path, data, function(err, uploadedImage) {
			if (err) {
				console.log(err);
				return res.status(err.statusCode).send(err.message);
			}
			console.log("uploadedImage: ", uploadedImage);
			res.send(uploadedImage.Location);
		});
	});

	app.post("/upload/image/user", function(req, res) {});
};
