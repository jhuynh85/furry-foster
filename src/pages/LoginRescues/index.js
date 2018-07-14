import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import * as actions from "../../actions";
import { toast } from "react-toastify";

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
								<div className="field">
									<label className="label">Email Address</label>
									<div className="control has-icons-left">
										<Field
											className="input"
											name={"email"}
											type={"email"}
											component={"input"}
											placeholder={"rescues@example.com"}
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
	connect(
		mapStateToProps,
		actions
	),
	reduxForm({ form: "rescueSignin" })
)(LoginRescues);
