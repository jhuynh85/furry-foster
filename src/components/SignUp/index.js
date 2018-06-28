import React, { Component } from "react";

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

	render() {
		return (
			<span className={"signupComponent"}>
				<a className={"text-color"} onClick={this.toggleModal}>
					<strong>JOIN</strong>
				</a>
				<Modal closeModal={this.toggleModal} modalState={this.state.modalState} title="Sign Up">
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
						<div className="field">
							<label className="label">Confirm Password</label>
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

export default SignUp;
