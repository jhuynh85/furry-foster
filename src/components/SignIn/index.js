import React, { Component } from "react";

import "./SignIn.css";
import Modal from "../Modal";

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalState: false
		};
	}

	toggleModal = () => {
		this.setState({ modalState: !this.state.modalState });
	};

	render() {
		return (
			<span className={"signinComponent"}>
				<a className={"text-color"} onClick={this.toggleModal}>
					<strong>LOGIN</strong>
				</a>
				<Modal
					closeModal={this.toggleModal}
					modalState={this.state.modalState}
					title="Sign In"
					footer={
						<span>
							New? <a>Create an account.</a>
						</span>
					}>
					<form>
						<div className="field">
							<label className="label">Email Address</label>
							<div className="control">
								<input
									className="input"
									type="email"
									name="orgEmail"
									placeholder="fosters@example.com"
								/>
							</div>
						</div>
						<div className="field">
							<label className="label">Password</label>
							<div className="control">
								<input className="input" type="text" placeholder="" />
							</div>
						</div>
						<input className="button is-warning is-medium" type="submit" value="Submit" />
					</form>
				</Modal>
			</span>
		);
	}
}

export default SignIn;
