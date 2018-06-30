import axios from "axios";
import { PAGE_CLICKED, AUTH_USER, AUTH_ERROR } from "./types";

export const clickPage = page => {
	return {
		type: PAGE_CLICKED,
		payload: page
	};
};

export const signup = ({ email, password }, callback) => async dispatch => {
	try {
		const response = await axios.post("http://localhost:5000/signup", {
			email,
			password
		});
		dispatch({ type: AUTH_USER, payload: response.data.token });
		// Store token to localStorage
		localStorage.setItem("token", response.data.token);
		console.log("Signup successful");
		callback();
	} catch (e) {
		console.log("Error: ", e.response);
		dispatch({ type: AUTH_ERROR, payload: e.response.data.error });
	}
};

export const signin = ({ email, password }, callback) => async dispatch => {
	try {
		const response = await axios.post("http://localhost:5000/signin", {
			email,
			password
		});
		dispatch({ type: AUTH_USER, payload: response.data.token });
		// Store token to localStorage
		localStorage.setItem("token", response.data.token);
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
	localStorage.removeItem("token");
	dispatch({ type: AUTH_USER, payload: "" });
	signoutCallback();
};
