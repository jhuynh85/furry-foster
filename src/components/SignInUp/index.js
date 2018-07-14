import React, { Component } from "react";

import "./SignInUp.css";
import Modal from "../Modal";
import Tabs from "../Tabs";
import Pane from "../Pane";

import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Button from "../Button";

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
		// if (this.state.modalState) this.resetForm(); // Reset form when modal is closed
		this.setState({ modalState: !this.state.modalState });
	};

	render() {
		return (
			<span className={"signinupComponent"}>
				<Button text={"SIGN IN"} onClick={this.toggleModal} />
				<Modal closeModal={this.toggleModal} modalState={this.state.modalState} title="" footer="">
					<Tabs>
						<Pane label="Sign In">
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

export default SignInUp;
