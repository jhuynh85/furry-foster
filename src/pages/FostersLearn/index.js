import React from "react";
import "./FostersLearn.css";
import Button from "../../components/Button";
import Tile from "../../components/Tile";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/ff_website2018_carousel.jpg";

class FostersLearn extends React.Component {
	render() {
		return (
			<div>
				<Banner image={bannerImage} text="Learn About Fostering" />
				<div className="container">
					<div className="columns">
						<div className="column">
							<section className="section content">
								<h2 className="subtitle has-text-centered">
									Fostering a pet is free, fun, and fulfilling. We have everything you need to know
									about fostering and find a pet.
								</h2>
								<hr />
								<div>
									<div className="columns">
										<div className="column">
											<h2>Foster Responsibilities</h2>
											<ul>
												<li>Housing & Care</li>
												<li>Basic Training</li>
												<li>Transportation</li>
												<li>Love & Family</li>
											</ul>
											<div>
												<Button link="/" text="MORE INFO" />
											</div>
										</div>
										<div className="column">
											<h2>Qualifications</h2>
											<ul>
												<li>18+ Years Old</li>
												<li>Pet-friendly Housing</li>
												<li>Reliable Transportation</li>
												<li>Ability and Time to Care For, Train & Socialize a Pet</li>
												<li>Commitment to Fostering Until Your Pet is Adopted</li>
											</ul>
											<div>
												<Button link="/" text="MORE INFO" />
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FostersLearn;
