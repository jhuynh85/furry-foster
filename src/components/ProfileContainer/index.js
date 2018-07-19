import React from "react";
import AddPetForm from "../../components/AddPetForm";
import { Link, Route, Switch } from "react-router-dom";
import "./ProfileContainer.css";

import ProfileInfo from "../ProfileInfo";
import ProfileSettings from "../ProfileSettings";

class ProfileContainer extends React.Component {
	render() {
		return (
			<div>
				<section className="hero is-primary">
					<div className="hero-body">
						<div className="container">
							<article className="media">
								<figure className="media-left">
									<p className="image is-64x64">
										<img src="https://bulma.io/images/placeholders/128x128.png" />
									</p>
								</figure>
								<div className="media-content">
									<div className="content">
										<h1 className="title">Blue Dog Rescue</h1>
										<h2 className="subtitle">San Diego, CA</h2>
									</div>
								</div>
							</article>
						</div>
					</div>
				</section>

				<div className="columns">
					<div className="column is-one-quarter">
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
					</div>
					<div className="column">
						<section className="section">
							<Switch>
								<Route exact path={`${this.props.match.path}/info`} component={ProfileInfo} />
								<Route
									exact
									path={`${this.props.match.path}/settings`}
									component={ProfileSettings}
								/>
								<Route exact path={`${this.props.match.path}/add`} component={AddPetForm} />
							</Switch>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileContainer;
