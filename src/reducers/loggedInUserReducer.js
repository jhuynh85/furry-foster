// Reducer for updating the current user in the store
import { UPDATE_LOGGED_IN_USER } from "../actions/types";

const INITIAL_STATE = {
	loggedInUser: ""
};

// State argument is not application state, only the state
// this reducer is responsible for
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_LOGGED_IN_USER:
			const loggedInUser = action.payload;
			console.log("UPDATE_LOGGED_IN_USER: ", action.payload);
			return { ...state, loggedInUser };
		default:
			return state;
	}
};
