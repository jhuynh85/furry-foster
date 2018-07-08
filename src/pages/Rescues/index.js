import React from "react";
import "./Rescues.css";

import Banner from "../../components/Banner";
import Sidebar from "../../components/Sidebar";
import bannerImage from "../../assets/images/ff_website2018_carousel.jpg";
import Button from "../../components/Button";

class Rescues extends React.Component {
	componentDidMount() {
		document.title = "Rescues";
	}

	render() {
		return (
			<div>
				<Banner image={bannerImage} text="Find new foster families with Furry Foster." />
				<div className="container">
					<div className="columns">
						<div className="column">
							<section className="section content">
								<h1 className="title is-1">Rescue Organizations</h1>
								<div>
									<h2>Find new foster families with Furry Foster.</h2>
									<p>
										We help you find new foster families plus provide free services and resource.
									</p>
									<br />
								</div>

								<div>
									<h2>Perks of Partnership</h2>
									<p className="subtitle">
										Becoming a rescue partner is more than just listing your pets online.
									</p>
									<ul>
										<li>List available foster pets for free</li>
										<li>Attract new foster families</li>
										<li>Free services, food, and accessories</li>
										<li>Extra promotion for your pets</li>
										<li>A community for your foster families</li>
									</ul>
									<br />
								</div>
								<div>
									<h2>Partnership Criteria:</h2>
									<p className="subtitle">
										If your organization meets the criteria below, let's work together.
									</p>
									<ul>
										<li>Engage in 501(c)(3) non-profit activities involved with animal rescue</li>
										<li>
											Cover basic costs for foster homes including food, vet care, and bedding
										</li>
										<li>Reliable Transportation</li>
										<li>
											Review foster applications and conduct home checks to ensure the comfort and
											safety of pets
										</li>
									</ul>
									<br />
								</div>
								<div>
									<Button link="/" text="MORE INFO" />
								</div>
							</section>
						</div>
						<Sidebar />
					</div>
				</div>
			</div>
		);
	}
}

export default Rescues;
