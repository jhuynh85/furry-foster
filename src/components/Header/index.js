import React from "react";
import ffLogo from "../../assets/images/ff_logo.png";
import "./Header.css";

import SocialMediaBar from "../SocialMediaBar";
import Search from "../Search";
import Navbar from "../Navbar";

class Header extends React.Component {
  render() {
    return (
      <div>
        <SocialMediaBar />
        <div className="columns">
          <div className="column has-text-centered">
            <img src={ffLogo} className="ff-logo" alt="Furry Foster logo" />
          </div>
          <div className="column align-mid header-search-input-bar">
            <Search />
          </div>
          <div className="column is-one-quarter has-text-centered align-mid">
            LOGIN &nbsp;<strong>|</strong>&nbsp; JOIN
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default Header;
