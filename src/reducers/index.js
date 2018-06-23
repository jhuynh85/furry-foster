import { combineReducers } from "redux";
import ActivePageReducer from "./ActivePageReducer";

const rootReducer = combineReducers({
	activePage: ActivePageReducer
});

export default rootReducer;
