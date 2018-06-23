import React from "react";
import "./LoginForm.css";

class LoginForm extends React.Component {
	render() {
		return (
			<div>
				<div className="title-case">
					<h1 className="title is-1">Sign In</h1>
				</div>
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
				<div className="title-case">
					<h1 className="title is-1">Sign Up</h1>
				</div>
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
			</div>
		);
	}
}

export default LoginForm;
