import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
	reducers,
	{ auth: { id: localStorage.getItem("id"), authenticated: localStorage.getItem("token") } },
	composeWithDevTools(applyMiddleware(reduxThunk))
);

export default props => {
	return <Provider store={store}>{props.children}</Provider>;
};
