// Reducer for setting provided JWT token and any error message
import { AUTH_USER, AUTH_ERROR } from "../actions/types";

const INITIAL_STATE = {
	authenticated: "",
	errorMessage: ""
};

export default function(state = INITIAL_STATE, action) {
	console.log("Auth: ", state);
	switch (action.type) {
		case AUTH_USER:
			const { id, token } = action.payload;
			console.log("AUTH_USER: ", action.payload);
			return { ...state, id, authenticated: token };
		case AUTH_ERROR:
			console.log("AUTH_ERROR: ", action.payload);
			return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
}
