import React from "react";
import { Link } from "react-router-dom";
import ffLogo from "../../assets/images/ff_logo.png";

import "./Header.css";

import { connect } from "react-redux";

import SocialMediaBar from "../../components/SocialMediaBar";
import Search from "../../components/Search";
import Navbar from "../../containers/Navbar";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import SignOut from "../../components/SignOut";

const Header = ({ auth }) => {
	const renderSignInOrSignOut = () => {
		if (!auth) {
			return (
				<span>
					<SignIn /> &nbsp;&nbsp;<strong>|</strong> &nbsp;&nbsp;<SignUp />
				</span>
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
