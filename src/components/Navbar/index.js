import React from "react";
import { connect } from "react-redux";
import { clickPage } from "../../actions/index";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			burgerActive: false
		};
	}

	// Handler for adding the 'is-active' effect and to close burger
	// menu when a navbar button is clicked
	handleButtonClick = e => {
		this.props.clickPage(e.target.getAttribute("data-name"));
		this.setState({ burgerActive: false });
	};

	// Handler for clicking on burger menu
	handleBurgerClick = e => {
		this.setState({ burgerActive: !this.state.burgerActive });
	};

	// Handler for closing burger menu when user clicks anywhere
	// outside while it is active
	handleOutsideClick = e => {
		if (!this.navMenu.contains(e.target)) {
			this.setState({ burgerActive: false });
		}
	};

	componentDidMount() {
		document.addEventListener("mousedown", this.handleOutsideClick);
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleOutsideClick);
	}

	render() {
		return (
			<nav ref={navMenu => (this.navMenu = navMenu)} className="navbar is-warning">
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
								this.props.activePage === "pets" ? "navbar-item is-active" : "navbar-item"
							}>
							<strong>Pets</strong>
						</Link>

						<div className="navbar-item has-dropdown is-hoverable">
							<Link
								to="/fosters"
								data-name="fosters"
								onClick={this.handleButtonClick}
								className={
									this.props.activePage === "fosters" ? "navbar-link is-active" : "navbar-link"
								}>
								<strong>Fosters</strong>
							</Link>
							<div className="navbar-dropdown is-boxed">
								<Link
									to="/fosters/learn_about_fostering"
									className="navbar-item"
									data-name="fosters"
									onClick={this.handleButtonClick}>
									Learn about fostering
								</Link>
								<Link
									to="/fosters/fostermob"
									className="navbar-item"
									data-name="fosters"
									onClick={this.handleButtonClick}>
									Foster Mob
								</Link>
								<Link
									to="/fosters/apply"
									className="navbar-item"
									data-name="fosters"
									onClick={this.handleButtonClick}>
									Apply to foster
								</Link>
								<Link
									to="/fosters/happytails"
									className="navbar-item"
									data-name="fosters"
									onClick={this.handleButtonClick}>
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
									this.props.activePage === "rescues" ? "navbar-link is-active" : "navbar-link"
								}>
								<strong>Rescues</strong>
							</Link>
							<div className="navbar-dropdown is-boxed">
								<Link
									to="/rescues/learn"
									className="navbar-item"
									data-name="rescues"
									onClick={this.handleButtonClick}>
									Learn about partnership
								</Link>
								<Link
									to="/rescues/resources"
									className="navbar-item"
									data-name="rescues"
									onClick={this.handleButtonClick}>
									Get Resources
								</Link>
								<Link
									to="/rescues/apply"
									className="navbar-item"
									data-name="rescues"
									onClick={this.handleButtonClick}>
									Apply to Partner
								</Link>
								<Link
									to="/rescues/happytails"
									className="navbar-item"
									data-name="rescues"
									onClick={this.handleButtonClick}>
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
									this.props.activePage === "programs" ? "navbar-link is-active" : "navbar-link"
								}>
								<strong>Programs</strong>
							</Link>
							<div className="navbar-dropdown is-boxed">
								<Link
									to="/resources"
									className="navbar-item"
									data-name="programs"
									onClick={this.handleButtonClick}>
									Resources
								</Link>
								<Link
									to="/furever"
									className="navbar-item"
									data-name="programs"
									onClick={this.handleButtonClick}>
									Foster 2 Furever
								</Link>
								<Link
									to="/rescues/apply"
									className="navbar-item"
									data-name="programs"
									onClick={this.handleButtonClick}>
									Apply to Partner
								</Link>
								<Link
									to="/fostermob"
									className="navbar-item"
									data-name="programs"
									onClick={this.handleButtonClick}>
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
									this.props.activePage === "partners" ? "navbar-link is-active" : "navbar-link"
								}>
								<strong>Partners</strong>
							</Link>
							<div className="navbar-dropdown is-boxed">
								<Link
									to="/partners/rescues"
									className="navbar-item"
									data-name="partners"
									onClick={this.handleButtonClick}>
									Rescue partners
								</Link>
								<Link
									to="/partners/community"
									className="navbar-item"
									data-name="partners"
									onClick={this.handleButtonClick}>
									Community partners
								</Link>
								<Link
									to="/partners/apply"
									className="navbar-item"
									data-name="partners"
									onClick={this.handleButtonClick}>
									Become a partner
								</Link>
							</div>
						</div>

						<Link
							to="/events"
							data-name="events"
							onClick={this.handleButtonClick}
							className={
								this.props.activePage === "events" ? "navbar-item is-active" : "navbar-item"
							}>
							<strong>Events</strong>
						</Link>

						<div className="navbar-item has-dropdown is-hoverable">
							<Link
								to="/donate"
								data-name="donate"
								onClick={this.handleButtonClick}
								className={
									this.props.activePage === "donate" ? "navbar-link is-active" : "navbar-link"
								}>
								<strong>Donate</strong>
							</Link>
							<div className="navbar-dropdown is-boxed">
								<Link
									to="/donate/wishlist"
									className="navbar-item"
									data-name="donate"
									onClick={this.handleButtonClick}>
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

//----------REDUX configuration----------//
// Map the redux store's state to Navbar's props
function mapStateToProps(state) {
	return { activePage: state.activePage };
}

// Anything returned from this function will end up as props
// on the Navbar container
function mapDispatchToProps(dispatch) {
	// Whenever clickPage is called, the result should be passed
	// to all of our reducers
	return bindActionCreators({ clickPage: clickPage }, dispatch);
}

// Promote Navbar from a component to a container
// It needs to know about this new dispatch method, clickPage
// Make it available as a prop
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar);
