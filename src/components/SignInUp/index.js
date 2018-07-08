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

class SignInUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalState: true
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
					<strong>SIGN IN/UP</strong>
				</a>
				<Modal closeModal={this.toggleModal} modalState={this.state.modalState} title="" footer="">
					<Tabs>
						<Pane label="Sign In">
							<div>
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
							</div>
						</Pane>
						<Pane label="Sign Up">
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
								<div className="field">
									<label className="label">Confirm Password</label>
									<div className="control has-icons-left">
										<Field
											className="input"
											component={"input"}
											name={"confirmPassword"}
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
