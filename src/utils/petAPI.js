import axios from "axios";

const petAPI = {
	addPetImage: (petID, imageURLs, auth) => {
		let imageURLsAsArray = imageURLs;
		// Make sure imageURLs is an array
		if (imageURLs.constructor !== Array) {
			imageURLsAsArray = [imageURLsAsArray];
		}
		let update = { $push: { images: { $each: imageURLsAsArray } } };
		return axios.patch("/api/update/pet/" + petID, update, auth);
	}
};

export default petAPI;
