import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";

const SignOut = props => {
	const handleSignOut = () => {
		props.signout();
	};

	return (
		<Link to={"/"} className={"text-color"} onClick={handleSignOut}>
			<strong>SIGN OUT</strong>
		</Link>
	);
};

export default connect(
	null,
	actions
)(SignOut);
