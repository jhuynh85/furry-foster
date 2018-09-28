const AWS = require("aws-sdk");

//=============== AWS CONFIGURATION ===============//
// configure the keys for accessing AWS
AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: "us-west-1"
});

// configure AWS to work with promises
// AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = async (id, path, data) => {
	const base64Data = new Buffer(data.replace(/^data:image\/\w+;base64,/, ""), "base64");

	// Getting the file type, ie: jpeg, png or gif
	const type = data.split(";")[0].split("/")[1];

	const params = {
		ACL: "public-read",
		Body: base64Data,
		Bucket: process.env.S3_BUCKET_ARN,
		ContentEncoding: "base64",
		ContentType: `image/${type}`,
		Key: `${path}`
	};

	try {
		// console.log("key: ", `${path}`);
		// console.log("bucket: ", process.env.S3_BUCKET_ARN);
		// console.log("type: ", `image/${type}`);
		let response = await s3.upload(params);
		console.log("s3 response: ", response);
		return response.location;
	} catch (err) {
		console.log("ERROR: ", err);
	}
};

// Define POST route
module.exports = function(app) {
	app.post("/upload/image/rescue", (req, res) => {});

	app.post("/upload/image/pet", async (req, res) => {
		// console.log("req: ", req.body);
		let { id, path, data } = req.body;
		let imageURL = await uploadFile(id, path, data);
		console.log("imageURL: ", imageURL);
		res.send(imageURL);
	});

	app.post("/upload/image/user", (req, res) => {});
};
