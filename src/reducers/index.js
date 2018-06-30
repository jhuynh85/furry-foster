import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import activePageReducer from "./activePageReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
	activePage: activePageReducer,
	auth: authReducer,
	form: formReducer
});

export default rootReducer;
