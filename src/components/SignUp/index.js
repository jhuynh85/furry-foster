import React, { Component } from "react";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions";

import "./SignUp.css";
import Modal from "../Modal";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalState: false
		};
	}

	toggleModal = () => {
		this.setState({ modalState: !this.state.modalState });
	};

	onSubmit = formProps => {
		this.props.signup({ email: formProps.email, password: formProps.password }, () => {
			// this.props.history.push("/redirect");
		});
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<span className={"signupComponent"}>
				<a className={"text-color"} onClick={this.toggleModal}>
					<strong>JOIN</strong>
				</a>
				<Modal closeModal={this.toggleModal} modalState={this.state.modalState} title="Sign Up">
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<div className="field">
							<label className="label">Email Address</label>
							<div className="control">
								<Field
									className="input"
									name={"email"}
									type={"email"}
									component={"input"}
									placeholder={"fosters@example.com"}
									autoComplete={"none"}
									autoFocus={"true"}
								/>
							</div>
						</div>
						<div className="field">
							<label className="label">Password</label>
							<div className="control">
								<Field
									className="input"
									component={"input"}
									name={"password"}
									type={"password"}
									autoComplete={"none"}
								/>
							</div>
						</div>
						<div className="field">
							<label className="label">Confirm Password</label>
							<div className="control">
								<Field
									className="input"
									component={"input"}
									name={"confirmPassword"}
									type={"password"}
									autoComplete={"none"}
								/>
							</div>
						</div>
						<button className="button is-warning is-medium" type="submit">
							Submit
						</button>
						<span>{this.props.errorMessage}</span>
					</form>
				</Modal>
			</span>
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
	reduxForm({ form: "signup" })
)(SignUp);
