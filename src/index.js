import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bulma/css/bulma.min.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";
import Root from "./Root";
// import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
	<Root>
		<App />
	</Root>,
	document.getElementById("root")
);
// registerServiceWorker();
