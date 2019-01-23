import React from "react";
import "./SocialMediaBar.css";

import { connect } from "react-redux";

import SignOut from "../SignOut";
import SignInUp from "../SignInUp";
import Button from "../Button";

const SocialMediaBar = ({ auth }) => {
	const renderSignInOrSignOut = () => {
		if (!auth) {
			return (
				<div className="one-line">
					<SignInUp />
				</div>
			);
		}
		return (
			<div className="one-line">
				<Button link={"/profile"} text={"PROFILE"} />
				&nbsp;&nbsp;&nbsp;
				<SignOut />
			</div>
		);
	};

	return (
		<div className="social-media-bar level">
			<div className="level-left">
				Share your foster stories and pictures!
				<a href="http://www.facebook.com/furryfoster" target="_blank" rel="noopener noreferrer">
					<i className="fa fa-facebook fa-1x" aria-hidden="true" />
				</a>
				&nbsp;&nbsp;&nbsp;
				<a href="http://www.twitter.com/furryfoster" target="_blank" rel="noopener noreferrer">
					<i className="fa fa-twitter fa-1x" aria-hidden="true" />
				</a>
				&nbsp;&nbsp;&nbsp;
				<a
					href="http://www.instagram.com/furryfosterpets"
					target="_blank"
					rel="noopener noreferrer">
					<i className="fa fa-instagram fa-1x" aria-hidden="true" />
				</a>
			</div>
			<div className="level-right">
				<div className="has-text-right align-mid">{renderSignInOrSignOut()}</div>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps)(SocialMediaBar);
