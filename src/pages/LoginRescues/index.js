import React, { Component } from "react";
import "./LoginRescues.css";
// import RescueSignIn from "../../components/RescueSignIn";

class LoginRescues extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="columns">
					<div className="column">
						<div className="section">
							<h3 class="title is-3">Login for Rescue Organizations</h3>
							<form onSubmit="">
								<div className="field">
									<label className="label">Email Address</label>
									<div className="control has-icons-left">
										<input
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
										<input
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
								<span />
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

export default LoginRescues;
