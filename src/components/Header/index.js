import React from "react";
import { Link } from "react-router-dom";
import ffLogo from "../../assets/images/ff_logo.png";

import "./Header.css";

import { connect } from "react-redux";

import SocialMediaBar from "../SocialMediaBar";
import Search from "../Search";
import Navbar from "../Navbar";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import SignOut from "../SignOut";

import SignInUp from "../SignInUp";

const Header = ({ auth }) => {
	const renderSignInOrSignOut = () => {
		if (!auth) {
			return (
				<div>
					<span>
						<SignIn /> &nbsp;&nbsp;<strong>|</strong> &nbsp;&nbsp;<SignUp />
					</span>
					<br />
					<span>
						<SignInUp />
					</span>
				</div>
			);
		}
		return <SignOut />;
	};

	return (
		<div>
			<SocialMediaBar />
			<div className="columns">
				<div className="column has-text-centered">
					<Link to={"/"}>
						<img src={ffLogo} className="ff-logo" alt="Furry Foster logo" />
					</Link>
				</div>
				<div className="column align-mid header-search-input-bar">
					<Search />
				</div>
				<div className="column is-one-quarter has-text-centered align-mid">
					{renderSignInOrSignOut()}
				</div>
			</div>
			<Navbar />
		</div>
	);
};

function mapStateToProps(state) {
	return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
