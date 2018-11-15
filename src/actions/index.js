import axios from "axios";
import {
	PAGE_CLICKED,
	AUTH_USER,
	AUTH_ERROR,
	CLEAR_AUTH_ERROR,
	UPDATE_LOGGED_IN_USER
} from "./types";

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
		dispatch({ type: UPDATE_LOGGED_IN_USER, payload: user });
		dispatch({ type: AUTH_USER, payload: token });
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
		dispatch({ type: UPDATE_LOGGED_IN_USER, payload: user });
		dispatch({ type: AUTH_USER, payload: token });
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
	dispatch({ type: UPDATE_LOGGED_IN_USER, payload: "" });
	dispatch({ type: AUTH_USER, payload: "" });
	signoutCallback();
};

// Updates user information and updates "user" state and localstorage variables
export const updateUser = (userID, updatedUser, callback) => async dispatch => {
	try {
		// Set authorization header because /api/update/rescue route is protected
		const header = { authorization: localStorage.getItem("token") };
		let response = await axios.patch(`/api/update/rescue/${userID}`, updatedUser, {
			headers: header
		});
		console.log("/api/update/rescue response: ", response);
		// UPDATE LOGGEDINUSER HERE
		const loggedInUser = response.data;
		localStorage.setItem("user", JSON.stringify(loggedInUser));
		dispatch({ type: UPDATE_LOGGED_IN_USER, payload: loggedInUser });
		// TOAST HERE
		callback();
	} catch (e) {
		console.log(e);
		console.log("API error: ", e.response);
	}
};
