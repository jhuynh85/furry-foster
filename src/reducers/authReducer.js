// Reducer for setting provided JWT token and any error message
// and clearing any error message
import { AUTH_USER, AUTH_ERROR, CLEAR_AUTH_ERROR } from "../actions/types";

const INITIAL_STATE = {
	user: "",
	authenticated: "",
	errorMessage: ""
};

export default function(state = INITIAL_STATE, action) {
	console.log("Auth: ", state);
	switch (action.type) {
		case AUTH_USER:
			const { user, token } = action.payload;
			console.log("AUTH_USER: ", action.payload);
			return { ...state, user, authenticated: token };
		case AUTH_ERROR:
			console.log("AUTH_ERROR: ", action.payload);
			return { ...state, errorMessage: action.payload };
		case CLEAR_AUTH_ERROR:
			console.log("CLEAR_AUTH_ERROR");
			return { ...state, errorMessage: "" };
		default:
			return state;
	}
}
