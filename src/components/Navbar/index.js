import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeButton: "",
			burgerActive: false
		};
	}

	// Handler for adding the 'is-active' effect when a navbar button is clicked
	handleButtonClick = e => {
		this.setState({ activeButton: e.target.getAttribute("data-name") });
	};

	// Handler for clicking on burger menu
	handleBurgerClick = e => {
		this.setState({ burgerActive: !this.state.burgerActive });
	};

	render() {
		return (
			<nav className="navbar is-warning">
				<div className="navbar-brand">
					<div
						className={
							this.state.burgerActive ? "navbar-burger burger is-active" : "navbar-burger burger"
						}
						onClick={this.handleBurgerClick}>
						<span />
						<span />
						<span />
					</div>
				</div>

				<div className={this.state.burgerActive ? "navbar-menu is-active" : "navbar-menu"}>
					<div className="navbar-start">
						<Link
							to="/pets"
							data-name="pets"
							onClick={this.handleButtonClick}
							className={
								this.state.activeButton === "pets" ? "navbar-item is-active" : "navbar-item"
							}>
							Pets
						</Link>

						<div className="navbar-item has-dropdown is-hoverable">
							<Link
								to="/fosters"
								data-name="fosters"
								onClick={this.handleButtonClick}
								className={
									this.state.activeButton === "fosters" ? "navbar-link is-active" : "navbar-link"
								}>
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
							<Link
								to="/rescues"
								data-name="rescues"
								onClick={this.handleButtonClick}
								className={
									this.state.activeButton === "rescues" ? "navbar-link is-active" : "navbar-link"
								}>
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
							<Link
								to="/programs"
								data-name="programs"
								onClick={this.handleButtonClick}
								className={
									this.state.activeButton === "programs" ? "navbar-link is-active" : "navbar-link"
								}>
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
							<Link
								to="/partners"
								data-name="partners"
								onClick={this.handleButtonClick}
								className={
									this.state.activeButton === "partners" ? "navbar-link is-active" : "navbar-link"
								}>
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

						<Link
							to="/events"
							data-name="events"
							onClick={this.handleButtonClick}
							className={
								this.state.activeButton === "events" ? "navbar-item is-active" : "navbar-item"
							}>
							Events
						</Link>

						<div className="navbar-item has-dropdown is-hoverable">
							<Link
								to="/donate"
								data-name="donate"
								onClick={this.handleButtonClick}
								className={
									this.state.activeButton === "donate" ? "navbar-link is-active" : "navbar-link"
								}>
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
