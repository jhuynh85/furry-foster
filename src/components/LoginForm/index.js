import React from "react";
import "./LoginForm.css";

class LoginForm extends React.Component {
	render() {
		return (
			<div>
				<div className="evel title-case">
					<h1 class="title is-1">Sign In</h1>
				</div>
				<form>
					<div class="field">
						<label class="label">Email Address</label>
						<div class="control">
							<input
								class="input"
								type="email"
								name="orgEmail"
								placeholder="fosters@example.com"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Password</label>
						<div class="control">
							<input class="input" type="text" placeholder="" />
						</div>
					</div>
					<input class="button is-warning is-medium" type="submit" value="Submit" />
				</form>
				<div className="evel title-case">
					<h1 class="title is-1">Sign Up</h1>
				</div>
				<form>
					<div class="field">
						<label class="label">Email Address</label>
						<div class="control">
							<input
								class="input"
								type="email"
								name="orgEmail"
								placeholder="fosters@example.com"
							/>
						</div>
					</div>
					<div class="field">
						<label class="label">Password</label>
						<div class="control">
							<input class="input" type="text" placeholder="" />
						</div>
					</div>
					<div class="field">
						<label class="label">Confirm Password</label>
						<div class="control">
							<input class="input" type="text" placeholder="" />
						</div>
					</div>
					<input class="button is-warning is-medium" type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default LoginForm;
