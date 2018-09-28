import axios from "axios";
// Uploads an image to the database
// type: "user" | "rescue" | "pet"
// id: id of the user, rescue, or pet
export const uploadImage = async ({ type, filename, data, id }) => {
	try {
		if (type === "user" || type === "rescue" || type === "pet") {
			let path = `images/${type}s/${id}/${filename}`;
			let uploadedImageURL = await axios.post(`/upload/image/${type}`, { id, path, data });
			return uploadedImageURL;
		}
		// Invalid type
		else {
			console.log(
				"ERROR: Invalid user type. Expected 'user', 'rescue', or 'pet', got '" + type + "' instead"
			);
		}
	} catch (e) {
		console.log("ERROR: ", e.response);
	}
};
