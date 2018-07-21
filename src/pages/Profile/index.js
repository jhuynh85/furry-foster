import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Profile.css";

import requireAuth from "../../components/HigherOrderComponents/requireAuth"; // HOC that makes this a protected page

import ProfileContainer from "../../components/ProfileContainer";
import ProfileInfo from "../../components/ProfileInfo";
import ProfileSettings from "../../components/ProfileSettings";
import AddPetForm from "../../components/AddPetForm";

class Profile extends Component {
	// Renders the submenu for this profile
	renderSubmenuArea = () => {
		return (
			<section className="section">
				<div className="menu">
					<p className="menu-label">Manage Account</p>
					<ul className="menu-list">
						<li>
							<Link to={`${this.props.match.url}/info`}>Account</Link>
						</li>
						<li>
							<a>Profile</a>
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
					<Route exact path={`${this.props.match.path}/info`} component={ProfileInfo} />
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
				name={"Red Cat Rescue"}
				location={"Los Angeles, CA"}
				submenu={this.renderSubmenuArea()}
				content={this.renderContentArea()}
			/>
		);
	}
}

export default requireAuth(Profile);
