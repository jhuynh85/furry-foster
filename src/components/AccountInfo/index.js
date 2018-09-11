import React, { Component } from "react";

class AccountInfo extends Component {
	render() {
		return (
			<div>
				<h3>Account Info</h3>
				<br />
				<strong>ACCOUNT EMAIL:</strong> {this.props.email}
				<br />
				<strong>ACCOUNT PASSWORD:</strong> {this.props.password}
				<br />
				<a>Change Password</a>
			</div>
		);
	}
}

export default AccountInfo;
