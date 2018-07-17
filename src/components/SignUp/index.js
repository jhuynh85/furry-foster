import React, { Component } from "react";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { toast } from "react-toastify";
import renderFieldWithLabel from "../HigherOrderComponents/renderFieldWithLabel";

import "./SignUp.css";

class SignUp extends Component {
	onSubmit = formProps => {
		this.props.signup(
			{ email: formProps.email, password: formProps.password, type: "user" },
			() => {
				toast.success("USER ACCOUNT CREATED");
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
				<Field
					className="input"
					label={"Confirm Password"}
					component={this.props.renderFieldWithLabel}
					name={"passwordConfirm"}
					type={"password"}
					autoComplete={"none"}
				/>
				<div className={"form-error-message"}>{this.props.errorMessage}</div>
				<input className="button is-warning is-medium" type="submit" value="Submit" />
			</form>
		);
	}
}

// Validates input fields
function validate(values) {
	const errors = {};

	// Check for email
	if (!values.email) {
		errors.email = "An email address is required";
	}

	// Check for password
	if (!values.password) {
		errors.password = "A password is required";
	} else {
		// Check password and passwordConfirm fields match
		if (values.passwordConfirm !== values.password) {
			errors.passwordConfirm = "Password and confirmation password does not match";
		}
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
	reduxForm({ validate, form: "signup" })
)(SignUp);
