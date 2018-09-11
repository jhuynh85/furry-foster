import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Profile.css";

import requireAuth from "../../components/HigherOrderComponents/requireAuth"; // HOC that makes this a protected page

import ProfileContainer from "../../components/ProfileContainer";
import ProfileInfo from "../../components/ProfileInfo";
import AccountInfo from "../../components/AccountInfo";
import ProfileSettings from "../../components/ProfileSettings";
import AddPetForm from "../../components/AddPetForm";

class Profile extends Component {
	constructor() {
		super();
		this.loggedInRescue = JSON.parse(localStorage.getItem("user"));
		console.log("loggedInRescue: ", this.loggedInRescue);
	}
	// Renders the submenu for this profile
	renderSubmenuArea = () => {
		return (
			<section className="section">
				<div className="menu">
					<p className="menu-label">Manage Account</p>
					<ul className="menu-list">
						<li>
							<Link to={`${this.props.match.url}/info`}>Profile</Link>
						</li>
						<li>
							<Link to={`${this.props.match.url}/account`}>Account</Link>
						</li>
						<li>
							<Link to={`${this.props.match.url}/settings`}>Settings</Link>
						</li>
					</ul>
					<p className="menu-label">Manage Pet</p>
					<ul className="menu-list">
						<li>
							<a>View Pets</a>
						</li>
						<li>
							<Link to={`${this.props.match.url}/add`}>Add Pets</Link>
						</li>
					</ul>
				</div>
			</section>
		);
	};

	// Renders the different content pages that can be selected in the submenu
	renderContentArea = () => {
		return (
			<section className="section">
				<Switch>
					<Route
						exact
						path={`${this.props.match.path}/info`}
						render={() => <ProfileInfo {...this.loggedInRescue} />}
					/>
					<Route
						exact
						path={`${this.props.match.path}/account`}
						render={() => <AccountInfo {...this.loggedInRescue} />}
					/>
					<Route exact path={`${this.props.match.path}/settings`} component={ProfileSettings} />
					<Route exact path={`${this.props.match.path}/add`} component={AddPetForm} />
				</Switch>
			</section>
		);
	};

	render() {
		// IMPORTANT: Set the match prop to this.props.match in order for submenu links to work
		return (
			<ProfileContainer
				match={this.props.match}
				profilePic={this.loggedInRescue.images[0]}
				name={this.loggedInRescue.orgName}
				location={this.loggedInRescue.city + ", " + this.loggedInRescue.state}
				submenu={this.renderSubmenuArea()}
				content={this.renderContentArea()}
			/>
		);
	}
}

export default requireAuth(Profile);
