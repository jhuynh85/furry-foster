import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { toast } from "react-toastify";

import "./SignIn.css";
import renderFieldWithLabel from "../HigherOrderComponents/renderFieldWithLabel";

class SignIn extends Component {
	onSubmit = formProps => {
		this.props.signin(
			{ email: formProps.email, password: formProps.password, type: "user" },
			() => {
				toast.info("USER SIGNED IN");
				// this.props.history.push("/redirect");
			}
		);
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<Field
					className="input"
					label={"Email Address"}
					name={"email"}
					type={"email"}
					component={this.props.renderFieldWithLabel}
					placeholder={"fosters@example.com"}
					autoComplete={"none"}
					autoFocus={"true"}
				/>
				<Field
					className="input"
					label={"Password"}
					component={this.props.renderFieldWithLabel}
					name={"password"}
					type={"password"}
					autoComplete={"none"}
				/>
				<div className={"form-error-message"}>{this.props.errorMessage}</div>
				<input className="button is-warning is-medium" type="submit" value="Submit" />
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	// Check for email
	if (!values.email) {
		errors.email = "An email address is required";
	}

	// Check for password
	if (!values.password) {
		errors.password = "A password is required";
	}

	return errors;
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.errorMessage };
}

export default compose(
	renderFieldWithLabel,
	connect(
		mapStateToProps,
		actions
	),
	reduxForm({ validate, form: "signin" })
)(SignIn);
