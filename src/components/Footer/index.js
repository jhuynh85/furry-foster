import React from "react";

import "./Footer.css";

// Get current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => (
	<footer className="page-footer">
		<div className="container center-align">
			<a href="#!">Privacy Policy</a> <a href="#!">Terms & Conditions</a>
			<br/>
			© {currentYear} FurryFoster.org
			<br/>
			&nbsp;
		</div>
  </footer>
);

export default Footer;
