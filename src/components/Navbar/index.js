import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-warning">
        <div className="navbar-brand">
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/pets" className="navbar-item">
              Pets
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/fosters" className="navbar-link">
                Fosters
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link to="/fosters/learn_about_fostering" className="navbar-item">
                  Learn about fostering
                </Link>
                <Link to="/fosters/fostermob" className="navbar-item">
                  Foster Mob
                </Link>
                <Link to="/fosters/apply" className="navbar-item">
                  Apply to foster
                </Link>
                <Link to="/fosters/happytails" className="navbar-item">
                  Happy Tails
                </Link>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/rescues" className="navbar-link" href="/documentation/overview/start/">
                Rescues
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link to="/rescues/learn" className="navbar-item">
                  Learn about partnership
                </Link>
                <Link to="/rescues/resources" className="navbar-item">
                  Get Resources
                </Link>
                <Link to="/rescues/apply" className="navbar-item">
                  Apply to Partner
                </Link>
                <Link to="/rescues/happytails" className="navbar-item">
                  Happy Tails
                </Link>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/programs" className="navbar-link" href="/documentation/overview/start/">
                Programs
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link to="/resources" className="navbar-item">
                  Resources
                </Link>
                <Link to="/furever" className="navbar-item">
                  Foster 2 Furever
                </Link>
                <Link to="/rescues/apply" className="navbar-item">
                  Apply to Partner
                </Link>
                <Link to="/fostermob" className="navbar-item">
                  Foster Mob
                </Link>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/partners" className="navbar-link" href="/documentation/overview/start/">
                Partners
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link to="/partners/rescues" className="navbar-item">
                  Rescue partners
                </Link>
                <Link to="/partners/community" className="navbar-item">
                  Community partners
                </Link>
                <Link to="/partners/apply" className="navbar-item">
                  Become a partner
                </Link>
              </div>
            </div>

            <Link to="/events" className="navbar-item">
              Events
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/donate" className="navbar-link" href="/documentation/overview/start/">
                Donate
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link to="/donate" className="navbar-item">
                  Donate
                </Link>
                <Link to="/donate/wishlist" className="navbar-item">
                  Fulfill A Wish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
