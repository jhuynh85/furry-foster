import React, { Component } from "react";

class ProfileInfo extends Component {
	render() {
		return (
			<div>
				<h2>Profile Info</h2>
				<br />
				<strong>EMAIL:</strong> {this.props.orgEmail}
				<br />
				<strong>PHONE:</strong> {this.props.phone}
				<br />
				<strong>ADDRESS:</strong> {this.props.address1}
				<br />
				{this.props.address2}
				<br />
				{this.props.city}, {this.props.state} {this.props.zip}
				<br />
				<strong>WEBSITE:</strong> {this.props.websiteURL}
				<br />
			</div>
		);
	}
}

export default ProfileInfo;
