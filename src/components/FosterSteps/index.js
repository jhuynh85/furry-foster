import React from "react";
import "./FosterSteps.css";

import PawTile from "../PawTile";

const FosterSteps = props => {
	return (
		<div>
			<section className="hero is-info has-text-centered">
				<div className="hero-body">
					<div className="progressbar_container">
						<ul className="progressbar">
							<li className="active">Find a Pet</li>
							<li className="active">Apply to Foster</li>
							<li className="active">Meet & Greet</li>
							<li className="active">Start Fostering</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="hero is-info is-medium has-text-centered">
				<div className="hero-body">
					<div className="container content">
						<h2 className="title is-2">Steps to Start Fostering</h2>
						<div className="content">
							<div className="columns">
								<div className="column">
									<PawTile
										cardTitle="Find a Pet"
										cardContent={[
											"Use the ",
											<a href=""> foster finder </a>,
											" to search and inquire about pets"
										]}
									/>
								</div>
								<div className="column">
									<PawTile
										cardTitle="Apply to Foster"
										cardContent={["Submit an application when you find the right pet"]}
									/>
								</div>
								<div className="column">
									<PawTile
										cardTitle="Meet and Greet"
										cardContent={["Meet the pet in person (the most fun step)"]}
									/>
								</div>
								<div className="column">
									<PawTile
										cardTitle="Start Fostering"
										cardContent={["Welcome your new pet home, temporarily!"]}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FosterSteps;
