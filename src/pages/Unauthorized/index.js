import React from "react";
import "./Unauthorized.css";

const Unauthorized = props => {
	return (
		<div className="container unauthorized">
			<section className="section content">
				<div className="content">
					<h4 className="subtitle is-4">Please sign in or sign up to view this page</h4>
				</div>
			</section>
		</div>
	);
};

export default Unauthorized;
