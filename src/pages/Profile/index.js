import React, { Component } from "react";
import "./Profile.css";

import ProfileContainer from "../../components/ProfileContainer";

import requireAuth from "../../components/HigherOrderComponents/requireAuth";

class Profile extends Component {
	render() {
		// Pass this.props.match to ProfileContainer in order for it to access the
		// react-router url
		return <ProfileContainer match={this.props.match} />;
	}
}

export default requireAuth(Profile);
