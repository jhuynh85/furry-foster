import React from "react";
import { Link } from "react-router-dom";
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
        <div className="level">
          <div className="level-item">
            <figure className="image is-200x200">
              <img src={ffLogo} alt="Furry Foster logo" />
            </figure>
          </div>
          <div className="level-item">
            <Search />
          </div>
          <div className="level-item">LOGIN &nbsp;<strong>|</strong>&nbsp; JOIN</div>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default Header;
