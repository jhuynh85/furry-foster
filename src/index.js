import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import "bulma/css/bulma.min.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const store = createStore(
	reducers,
	{ auth: { authenticated: localStorage.getItem("token") } },
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
// registerServiceWorker();
