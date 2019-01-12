import React from "react";
import "./Pane.css";

const Pane = props => {
	return (
		<div>
			<div className="pane">{props.children}</div>
		</div>
	);
};

export default Pane;
