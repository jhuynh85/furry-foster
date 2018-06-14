import React from "react";
import { Link } from "react-router-dom";
import ffLogo from "../../assets/images/ff_logo.png";
import './Header.css';

class Header extends React.Component {

render() {
    return(
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <Link to={ "/" } className="brand-logo"><img src={ ffLogo } alt="Furry Foster logo"/></Link>
              <a href="#" className="right sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <li><Link to={ "/" }>Home</Link></li>
                <li><Link to={ "/pets" }>Search Pets</Link></li>
                <li><Link to={ "/fosters" }>Fosters</Link></li>
                <li><Link to={ "/rescues" }>Shelters & Rescues</Link></li>
                <li><Link to={ "/programs" }>Programs</Link></li>
                <li><Link to={"/partners"}>Partners</Link></li>
                <li><Link to={ "/events" }>Events</Link></li>
                <li><Link to={ "/donate" }>Donate</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
