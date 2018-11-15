import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import activePageReducer from "./activePageReducer";
import authReducer from "./authReducer";
import loggedInUserReducer from "./loggedInUserReducer";

const rootReducer = combineReducers({
	activePage: activePageReducer,
	auth: authReducer,
	user: loggedInUserReducer,
	form: formReducer
});

export default rootReducer;
