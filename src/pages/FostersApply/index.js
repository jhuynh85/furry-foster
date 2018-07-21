import React from "react";
import AddPetForm from "../../components/AddPetForm";
import "./FostersApply.css";

class FostersApply extends React.Component {
	render() {
		return (
			<div>
				<section className="hero is-primary">
					<div className="hero-body">
						<div className="container">
							<article className="media">
								<figure className="media-left">
									<p className="image is-64x64">
										<img
											src="https://bulma.io/images/placeholders/128x128.png"
											alt={"Profile pic"}
										/>
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
										<a>Account</a>
									</li>
									<li>
										<a>Profile</a>
									</li>
									<li>
										<a>Settings</a>
									</li>
								</ul>
								<p className="menu-label">Manage Pet</p>
								<ul className="menu-list">
									<li>
										<a>View Pets</a>
									</li>
									<li>
										<a>Add Pets</a>
									</li>
								</ul>
							</div>
						</section>
					</div>
					<div className="column">
						<section className="section">
							<AddPetForm />
						</section>
					</div>
				</div>
			</div>
		);
	}
}

export default FostersApply;
