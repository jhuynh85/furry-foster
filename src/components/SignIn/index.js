import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { toast } from "react-toastify";

import "./SignIn.css";
import formFields from "../HigherOrderComponents/formFields";

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
		const { handleSubmit, submitting } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<Field
					icon={"envelope"}
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
					icon={"lock"}
					className="input"
					label={"Password"}
					component={this.props.renderFieldWithLabel}
					name={"password"}
					type={"password"}
					autoComplete={"none"}
				/>
				<div className={"form-error-message"}>{this.props.errorMessage}</div>
				<button
					className={`button is-warning is-medium ${submitting ? "is-loading" : ""}`}
					type="submit"
					value="Submit">
					Submit
				</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.errorMessage };
}

export default compose(
	formFields,
	connect(
		mapStateToProps,
		actions
	),
	reduxForm({ form: "signin" })
)(SignIn);
