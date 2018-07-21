import React from "react";
import "./ProfileContainer.css";

const ProfileContainer = props => {
	return (
		<div>
			<section className="hero is-primary">
				<div className="hero-body">
					<div className="container">
						<article className="media">
							<figure className="media-left">
								<p className="image is-64x64">
									<img
										src={props.profilePic || "https://bulma.io/images/placeholders/128x128.png"}
										alt={"Profile pic"}
									/>
								</p>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title">{props.name || "props.name"}</h1>
									<h2 className="subtitle">{props.location || "props.location"}</h2>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>

			<div className="columns">
				<div className="column is-one-quarter">{props.submenu}</div>
				<div className="column">{props.content}</div>
			</div>
		</div>
	);
};

export default ProfileContainer;
