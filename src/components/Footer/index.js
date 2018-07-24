import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

// Get current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => (
	<footer className="page-footer title-case">
		<br />
		<div className="container has-text-left">
			<section className="section">
				<div className="columns is-left is-mobile">
					<div className="column" />
					<div className="column">
						<h6 className="subtitle is-6 is-uppercase">Furry Foster</h6>
						<div className="menu">
							<ul className="menu-list">
								<li>
									<Link to={"/about"}>About</Link>
								</li>
								<li>
									<Link to={"/"}>Foster a Pet</Link>
								</li>
								<li>
									<Link to={"/volunteer"}>Volunteer</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="column">
						<h6 className="subtitle is-6 is-uppercase">Rescue Partners</h6>
						<div className="menu">
							<ul className="menu-list">
								<li>
									<Link to={"/login/rescues"}>Rescue Login</Link>
								</li>
								<li>
									<Link to={"/volunteer"}>Partner With Us</Link>
								</li>
								<li>
									<Link to={"/rescues/happytails"}>Happy Tails</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="column">
						<h6 className="subtitle is-6 is-uppercase">Help</h6>
						<div className="menu">
							<ul className="menu-list">
								<li>
									<Link to={"/"}>Contact Us</Link>
								</li>
								<li>
									<Link to={"/"}>Site Map</Link>
								</li>
								<li>
									<Link to={"/"}>FAQ</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="column">
						<h6 className="subtitle is-6 is-uppercase">Connect</h6>
						<div className="menu">
							<ul className="menu-list">
								<li>
									<a
										href="http://www.facebook.com/furryfoster"
										target="_blank"
										rel="noopener noreferrer">
										<i className="fa fa-facebook icon is-small" aria-hidden="true" />
										&nbsp;Facebook
									</a>
								</li>
								<li>
									<a
										href="http://www.facebook.com/furryfoster"
										target="_blank"
										rel="noopener noreferrer">
										<i className="fa fa-instagram icon is-small" aria-hidden="true" />
										&nbsp;Instagram
									</a>
								</li>
								<li>
									<a
										href="http://www.facebook.com/furryfoster"
										target="_blank"
										rel="noopener noreferrer">
										<i className="fa fa-twitter icon is-small" aria-hidden="true" />
										&nbsp;Twitter
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="column" />
				</div>
			</section>
			<div className="is-size-7 has-text-centered">
				<a href="#!">Privacy Policy</a> <a href="#!">Terms & Conditions</a> © {currentYear}{" "}
				FurryFoster.org
				<br />
				&nbsp;
			</div>
		</div>
	</footer>
);

export default Footer;
