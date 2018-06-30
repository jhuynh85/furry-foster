import React, { Component } from "react";
import "./Profile.css";

import requireAuth from "../../components/HigherOrderComponents/requireAuth";

class Profile extends Component {
	render() {
		return <div>Private Profile page</div>;
	}
}

export default requireAuth(Profile);
