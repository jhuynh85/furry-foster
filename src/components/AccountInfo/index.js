import React, { Component } from "react";

class AccountInfo extends Component {
	render() {
		return (
			<div class="content">
				<h1>Account</h1>
				<form>
					<div className="field">
						<label className="label">Account Email*</label>
						<div className="control">
							<input className="input" type="text" value={this.props.email} />
						</div>
					</div>
					<div className="field">
						<label className="label">Account Password*</label>
						<div className="control">
							<input className="input" type="text" value={this.props.password} />
						</div>
					</div>
					<div>
						<a class="button is-warning">
							<strong>Update</strong>
						</a>
					</div>
				</form>
			</div>
		);
	}
}

export default AccountInfo;
