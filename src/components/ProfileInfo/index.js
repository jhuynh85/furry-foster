import React, { Component } from "react";

class ProfileInfo extends Component {
	render() {
		return (
			<div>
				<h3>Profile Info</h3>
				<br />
				<strong>EMAIL:</strong> {this.props.email}
				<br />
				<strong>PHONE:</strong> {this.props.phone}
				<br />
				<strong>ADDRESS:</strong> {this.props.address}
				<br />
				<strong>WEBSITE:</strong> {this.props.website}
				<br />
			</div>
		);
	}
}

export default ProfileInfo;
