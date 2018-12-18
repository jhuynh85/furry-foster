import React from "react";
import "./FostersLearn.css";
import Button from "../../components/Button";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/ff_website2018_carousel.jpg";

class FostersLearn extends React.Component {
	render() {
		return (
			<div>
				<Banner image={bannerImage} text="Learn About Fostering" />
				<div className="container has-text-centered">
					<div className="columns">
						<div className="column content">
							<section className="section">
								<h2 className="subtitle">
									Fostering a pet is free, fun, and fulfilling.
									<br />
									Join our network of foster families for support.
								</h2>
								<p>
									When you foster, you're helping an animal who's at risk. It's a fulfilling
									experience that every animal lover should consider.
								</p>
							</section>
							<section className="section">
								<div>
									<div className="columns">
										<div className="column">
											<div className="card">
												<div className="card-image">
													<img src={bannerImage} alt="Placeholder banner" />
												</div>
												<div className="card-content">
													<div className="content">
														<h2>Foster Responsibilities</h2>
														<ul>
															<li>Housing & Care</li>
															<li>Basic Training</li>
															<li>Transportation</li>
															<li>Love & Family</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="column">
											<div className="card">
												<div className="card-image">
													<img src={bannerImage} alt="Placeholder banner" />
												</div>
												<div className="card-content">
													<div className="content">
														<h2>Qualifications</h2>
														<ul>
															<li>18+ Years Old</li>
															<li>Pet-friendly Housing</li>
															<li>Ability and Time to Care For, Train & Socialize a Pet</li>
															<li>Commitment to Fostering Until Your Pet is Adopted</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section className="section">
								<p>
									All of our rescue partners pay for food and vet care. Requirements for each rescue
									are different, so double check with the organization you volunteer for.
								</p>
								<Button link="/pets" text="Find a foster pet" />
							</section>
							<section className="section">
								<h2>How Fostering a Pet Works</h2>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FostersLearn;
