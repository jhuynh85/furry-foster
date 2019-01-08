import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

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

	toggleModal = () => {
		this.props.clearError(); // Clears any auth errors whenever modal is toggled
		this.setState({ modalState: !this.state.modalState });
	};

	render() {
		return (
			<span className={"signinupComponent"}>
				<a onClick={this.toggleModal}>Sign In</a> | <a onClick={this.toggleModal}>Sign Up</a>
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

export default connect(
	null,
	actions
)(SignInUp);
