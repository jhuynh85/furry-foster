import React from "react";
import "./FosterSteps.css";
import squareImage from "../../assets/images/default_cat_avatar.png";

const FosterSteps = props => {
	return (
		<div>
			<section className="hero is-info has-text-centered">
				<div className="hero-body">
					<div className="container">
						<section className="section">
							<h2 className="title is-2">Steps to Start Fostering</h2>
						</section>
						<div className="columns is-mobile">
							<div className="column">
								<img src={squareImage} alt="step-1" />
							</div>
							<div className="column">
								<img src={squareImage} alt="step-2" />
							</div>
							<div className="column">
								<img src={squareImage} alt="step-3" />
							</div>
							<div className="column">
								<img src={squareImage} alt="step-4" />
							</div>
						</div>
						<div className="progressbar_container">
							<ul className="progressbar">
								<li className="active">Find a Pet</li>
								<li className="active">Apply to Foster</li>
								<li className="active">Meet & Greet</li>
								<li className="active">Start Fostering</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FosterSteps;
