import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import * as actions from "../../actions";
import { toast } from "react-toastify";
import formFields from "../../components/HigherOrderComponents/formFields";
import { Redirect } from "react-router-dom";

import "./LoginRescues.css";

class LoginRescues extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false
		};
	}

	onSubmit = formProps => {
		this.props.signin(
			{ email: formProps.email, password: formProps.password, type: "rescue" },
			this.displayToastAndRedirect
		);
	};

	displayToastAndRedirect = () => {
		toast.info("RESCUE SIGNED IN");
		this.setState({ loggedIn: true });
	};

	render() {
		const { handleSubmit, submitting } = this.props;

		if (this.state.loggedIn) {
			return <Redirect to="/profile" />;
		}

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
								<button
									className={`button is-warning is-medium ${submitting ? "is-loading" : ""}`}
									type="submit"
									value={"Submit"}>
									Submit
								</button>
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
	formFields,
	connect(
		mapStateToProps,
		actions
	),
	reduxForm({ form: "rescueSignin" })
)(LoginRescues);
