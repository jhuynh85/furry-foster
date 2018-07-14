import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { toast } from "react-toastify";

import "./SignIn.css";

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
				<div className="field">
					<label className="label">Email Address</label>
					<div className="control has-icons-left">
						<Field
							className="input"
							name={"email"}
							type={"email"}
							component={"input"}
							placeholder={"fosters@example.com"}
							autoComplete={"none"}
							autoFocus={"true"}
						/>
						<span className="icon is-small is-left">
							<i className="fa fa-envelope" />
						</span>
					</div>
				</div>
				<div className="field">
					<label className="label">Password</label>
					<div className="control has-icons-left">
						<Field
							className="input"
							component={"input"}
							name={"password"}
							type={"password"}
							autoComplete={"none"}
						/>
						<span className="icon is-small is-left">
							<i className="fa fa-lock" />
						</span>
					</div>
				</div>
				<input className="button is-warning is-medium" type="submit" value="Submit" />
				<span>{this.props.errorMessage}</span>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.errorMessage };
}

export default compose(
	connect(
		mapStateToProps,
		actions
	),
	reduxForm({ form: "signin" })
)(SignIn);
