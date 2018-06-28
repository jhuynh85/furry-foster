import React from "react";
import { Link } from "react-router-dom";
import ffLogo from "../../assets/images/ff_logo.png";
import "./Header.css";

import SocialMediaBar from "../SocialMediaBar";
import Search from "../Search";
import Navbar from "../../containers/Navbar";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

class Header extends React.Component {
	render() {
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
						<SignIn /> &nbsp;<strong>|</strong>&nbsp; <SignUp />
					</div>
				</div>
				<Navbar />
			</div>
		);
	}
}

export default Header;
