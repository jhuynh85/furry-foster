import axios from "axios";
import { PAGE_CLICKED, AUTH_USER, AUTH_ERROR } from "./types";

export const clickPage = page => {
	return {
		type: PAGE_CLICKED,
		payload: page
	};
};

// Sign up action
// Sends a request to create a new user or rescue
export const signup = ({ type, ...input }, callback) => async dispatch => {
	try {
		let response;
		//----------- USER SIGNUP -------//
		if (type === "user") {
			response = await axios.post("/signup/user", {
				email: input.email,
				password: input.password
			});
		}

		//----------- RESCUE SIGNUP -------//
		else if (type === "rescue") {
			response = await axios.post("/signup/rescue", {
				orgName: input.orgName,
				orgEmail: input.orgEmail,
				phone: input.phone,
				email: input.email,
				password: input.password,
				address1: input.address1,
				address2: input.address2,
				city: input.city,
				state: input.state,
				zip: input.zip,
				websiteURL: input.websiteURL,
				ein: input.ein
			});
		}

		const { id, token } = response.data;
		const payload = {
			id,
			token
		};
		dispatch({ type: AUTH_USER, payload });
		// Store token to localStorage
		localStorage.setItem("id", id);
		localStorage.setItem("token", token);
		console.log("Signup successful");
		callback();
	} catch (e) {
		console.log("Error: ", e.response);
		dispatch({ type: AUTH_ERROR, payload: e.response.data.error });
	}
};

export const signin = ({ email, password, type }, callback) => async dispatch => {
	try {
		let response;
		//----------- USER SIGNIN -------//
		if (type === "user") {
			response = await axios.post("/signin/user", {
				email,
				password
			});
		}

		//----------- RESCUE SIGNIN -------//
		else if (type === "rescue") {
			response = await axios.post("/signin/rescue", {
				email,
				password
			});
		}

		const { id, token } = response.data;
		const payload = {
			id,
			token
		};
		dispatch({ type: AUTH_USER, payload });
		// Store token to localStorage
		localStorage.setItem("id", id);
		localStorage.setItem("token", token);
		console.log("Signin successful");
		callback();
	} catch (e) {
		console.log("Error: ", e.response);
		dispatch({ type: AUTH_ERROR, payload: "Invalid email/password combination" });
	}
};

// Signs the user out and clears JWT token from localStorage
export const signout = signoutCallback => dispatch => {
	console.log("Signed out");
	// Clear localStorage
	localStorage.removeItem("id");
	localStorage.removeItem("token");
	dispatch({ type: AUTH_USER, payload: "" });
	signoutCallback();
};

export const rescueApply = ({ formProps }, callback) => async dispatch => {};
