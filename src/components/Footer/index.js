import React from "react";
import { Link } from "react-router-dom";
import footerIcon from "../../assets/images/ff_website2018_icons_footer.png";

import "./Footer.css";

// Get current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => (
	<footer className="page-footer title-case">
		<br />

		<div className="has-text-centered">
			<img alt="Furry foster home icon" src={footerIcon} style={{ width: 50 }} />
		</div>
		<section className="section">
			<div className="columns footer-list-container">
				<div className="column is-offset-1-desktop">
					<h6 className="subtitle is-6 is-uppercase">Furry Foster</h6>
					<ul className={"footer-list"}>
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
				<div className="column">
					<h6 className="subtitle is-6 is-uppercase">Rescue Partners</h6>
					<ul className={"footer-list"}>
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
				<div className="column">
					<h6 className="subtitle is-6 is-uppercase">Help</h6>
					<ul className={"footer-list"}>
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
				<div className="column">
					<h6 className="subtitle is-6 is-uppercase">Connect</h6>
					<ul className={"footer-list"}>
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
								href="http://www.instagram.com/furryfosterpets"
								target="_blank"
								rel="noopener noreferrer">
								<i className="fa fa-instagram icon is-small" aria-hidden="true" />
								&nbsp;Instagram
							</a>
						</li>
						<li>
							<a
								href="http://www.twitter.com/furryfoster"
								target="_blank"
								rel="noopener noreferrer">
								<i className="fa fa-twitter icon is-small" aria-hidden="true" />
								&nbsp;Twitter
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<div className="is-size-7 has-text-centered">
			<a href="#!">Privacy Policy</a> <a href="#!">Terms & Conditions</a> © {currentYear}{" "}
			FurryFoster.org
			<br />
			&nbsp;
		</div>
	</footer>
);

export default Footer;
