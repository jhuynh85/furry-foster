import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

// Get current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => (
  <footer className="page-footer center-align">
    <div className="row">
      <div className="col s6 m2 offset-m4">
        <ul>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/volunteer"}>Volunteer</Link></li>
          <li><Link to={"/happytails"}>Happy Tails</Link></li>
        </ul>
      </div>
      <div className="col s6 m2">
        <ul>
          <li><Link to={"/blog"}>Blog</Link></li>
          <li><Link to={"/faq"}>FAQ</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </div>
      <div className="copyright col s12">
        <a href="#!">Privacy Policy</a> <a href="#!">Terms & Conditions</a>
        <br />
        © {currentYear} FurryFoster.org
        <br />
        &nbsp;
      </div>
    </div>
  </footer>
);

export default Footer;
