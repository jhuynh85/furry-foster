import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { toast } from "react-toastify";

import "./SignInUp.css";
import Modal from "../Modal";
import Tabs from "../Tabs";
import Pane from "../Pane";

import SignIn from "../SignIn";
import SignUp from "../SignUp";

class SignInUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalState: false
		};
	}

	resetForm = () => {
		const { reset } = this.props;
		// console.log("Resetting sign in form");
		reset();
	};

	toggleModal = () => {
		if (this.state.modalState) this.resetForm(); // Reset form when modal is closed
		this.setState({ modalState: !this.state.modalState });
	};

	onSubmit = formProps => {
		this.props.signinup({ email: formProps.email, password: formProps.password }, () => {
			toast.info("SIGNED IN");
			// this.props.history.push("/redirect");
		});
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<span className={"signinupComponent"}>
				<a className={"text-color"} onClick={this.toggleModal}>
					<strong>LOG IN</strong> | <strong>SIGN UP</strong>
				</a>
				<Modal closeModal={this.toggleModal} modalState={this.state.modalState} title="" footer="">
					<Tabs>
						<Pane label="Log In">
							<div>
								<SignIn />
							</div>
						</Pane>
						<Pane label="Sign Up">
							<div>
								<SignUp />
							</div>
						</Pane>
					</Tabs>
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
	reduxForm({ form: "signinup" })
)(SignInUp);
