import React from "react";
import { Link } from "react-router-dom";
import ffLogo from "../../assets/images/ff_logo.png";

import "./Header.css";

import { connect } from "react-redux";

import SocialMediaBar from "../SocialMediaBar";
import Search from "../Search";
import Navbar from "../Navbar";

const Header = ({ auth }) => {
	return (
		<div>
			<SocialMediaBar />
			<div className="level margin10 main-header">
				<div className="level-left ff-logo-container">
					<Link to={"/"}>
						<img src={ffLogo} className="ff-logo" alt="Furry Foster logo" />
					</Link>
				</div>
				<div className="level-right">
					<div className=" header-search-input-bar">
						<Search />
					</div>
					&nbsp;&nbsp;&nbsp;
					<Navbar />
				</div>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
