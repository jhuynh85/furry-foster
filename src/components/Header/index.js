import React from "react";
import ffLogo from "../../assets/images/ff_logo.png";
import './Header.css';

class Header extends React.Component {

render() {
    return(
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo"><img src={ ffLogo } alt="Furry Foster logo"/></a>
              <a href="#" className="right sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <li><a>Home</a></li>
                <li><a>Search Pets</a></li>
                <li><a>Fosters</a></li>
                <li><a>Shelters & Rescues</a></li>
                <li><a>Events</a></li>
                <li><a>Blog</a></li>
                <li><a>Donate</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
