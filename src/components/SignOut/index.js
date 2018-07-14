import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { toast } from "react-toastify";
import Button from "../Button";

const SignOut = props => {
	const handleSignOut = () => {
		props.signout(() => {
			toast.info("SIGNED OUT");
		});
	};

	return <Button onClick={handleSignOut} link={"/"} text={"SIGN OUT"} />;
};

export default connect(
	null,
	actions
)(SignOut);
