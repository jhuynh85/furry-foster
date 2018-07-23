import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

// Get current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => (
	<footer className="page-footer has-text-centered title-case">
		<br />
		<div className="columns is-centered is-mobile">
			<div className="column is-one-quarter">
				<ul>
					<li>
						<Link to={"/about"}>About</Link>
					</li>
					<li>
						<Link to={"/volunteer"}>Volunteer</Link>
					</li>
					<li>
						<Link to={"/happytails"}>Happy Tails</Link>
					</li>
				</ul>
			</div>
			<div className="column is-one-quarter">
				<ul>
					<li>
						<Link to={"/login/rescues"}>Rescue Sign-in</Link>
					</li>
					<li>
						<Link to={"/blog"}>Blog</Link>
					</li>
					<li>
						<Link to={"/faq"}>FAQ</Link>
					</li>
					<li>
						<Link to={"/contact"}>Contact</Link>
					</li>
				</ul>
			</div>
		</div>
		<div className="copyright">
			<a href="#!">Privacy Policy</a> <a href="#!">Terms & Conditions</a>
			<br />
			© {currentYear} FurryFoster.org
			<br />
			&nbsp;
		</div>
	</footer>
);

export default Footer;
