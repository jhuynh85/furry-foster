import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import * as actions from "../../actions";
import { toast } from "react-toastify";
import renderFieldWithLabel from "../../components/HigherOrderComponents/renderFieldWithLabel";

import "./LoginRescues.css";

// import RescueSignIn from "../../components/RescueSignIn";

class LoginRescues extends Component {
	onSubmit = formProps => {
		this.props.signin(
			{ email: formProps.email, password: formProps.password, type: "rescue" },
			() => {
				toast.info("RESCUE SIGNED IN");
				// this.props.history.push("/redirect");
			}
		);
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="container">
				<div className="columns">
					<div className="column">
						<div className="section">
							<h3 className="title is-3">Login for Rescue Organizations</h3>
							<form onSubmit={handleSubmit(this.onSubmit)}>
								<Field
									icon={"envelope"}
									className="input"
									name={"email"}
									type={"email"}
									component={this.props.renderFieldWithLabel}
									placeholder={"rescues@example.com"}
									autoComplete={"none"}
									autoFocus={"true"}
								/>
								<Field
									icon={"lock"}
									className="input"
									component={this.props.renderFieldWithLabel}
									name={"password"}
									type={"password"}
									autoComplete={"none"}
								/>
								<div className={"form-error-message"}>{this.props.errorMessage}</div>
								<input className="button is-warning is-medium" type="submit" value="Submit" />
							</form>
						</div>
					</div>
					<div className="column">
						<div className="section">Image</div>
					</div>
				</div>
			</div>
		);
	}
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
	reduxForm({ form: "rescueSignin" })
)(LoginRescues);
