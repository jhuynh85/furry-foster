import axios from "axios";
import { PAGE_CLICKED, AUTH_USER, AUTH_ERROR, CLEAR_AUTH_ERROR } from "./types";

export const clickPage = page => {
	return {
		type: PAGE_CLICKED,
		payload: page
	};
};

// Dispatches an action to clear the auth.errorMessage property from
// the redux store
export const clearError = () => {
	return {
		type: CLEAR_AUTH_ERROR,
		payload: ""
	};
};

// Sign up action
// Sends a request to create a new user or rescue
export const signup = ({ type, ...input }, callback) => async dispatch => {
	try {
		let response;
		//----------- USER SIGNUP -------//
		if (type === "user") {
			response = await axios.post("/signup/user", input);
		}

		//----------- RESCUE SIGNUP -------//
		else if (type === "rescue") {
			response = await axios.post("/signup/rescue", input);
		}

		const { user, token } = response.data;
		const payload = {
			user,
			token
		};
		dispatch({ type: AUTH_USER, payload });
		// Store token to localStorage
		localStorage.setItem("user", JSON.stringify(user));
		localStorage.setItem("token", token);
		console.log("Signup successful");
		callback();
	} catch (e) {
		console.log("API error: ", e.response);
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

		const { user, token } = response.data;
		const payload = {
			user,
			token
		};
		dispatch({ type: AUTH_USER, payload });
		// Store token to localStorage
		localStorage.setItem("user", JSON.stringify(user));
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
	localStorage.removeItem("user");
	localStorage.removeItem("token");
	dispatch({ type: AUTH_USER, payload: "" });
	signoutCallback();
};
