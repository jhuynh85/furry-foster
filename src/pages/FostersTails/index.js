import React from "react";
import "./FostersTails.css";

import bannerImage from "../../assets/images/ff_website2018_carousel.jpg";
import pawPattern from "../../assets/images/ff_pattern_white.png";

var sectionStyle = {
	backgroundImage: "url(" + pawPattern + ")",
	backgroundRepeat: "repeat",
	backgroundSize: "10%"
};

class FostersTails extends React.Component {
	render() {
		return (
			<div>
				<section className="section">
					<div className="container">
						<div className="content">
							<h1 className="title is-1 has-text-centered">Foster Tails</h1>
							<h2 className="sibtitle is-2 has-text-centered">
								We are proud to share stories of our happy foster families.
								<br /> Did you find your foster here? Share your story with us!
							</h2>
						</div>
					</div>
				</section>
				<section className="hero is-warning is-medium " style={sectionStyle}>
					<div className="hero-body ">
						<div className="container">
							<div className="has-text-centered">
								<div className="columns">
									<div className="column is-one-quarter">
										<div className="main-testimonial-sq">
											<img src={bannerImage} alt="Happy foster family" />
										</div>
									</div>
									<div className="column has-text-left">
										<div className="main-testimonial-quote">
											"I love animals. I thought about volunteering at an animal shelter, but felt I
											had to do something more. After moving back to San Diego from Switzerland, I
											decided I wanted to foster as many dogs as I could, but was wondering how to
											go about it ..."
										</div>
										<section className="section">
											<div className="main-testimonial-name ">
												<h3>Foster Mom Alisa & Darcy</h3> with Chihuahua Rescue of San Diego
											</div>
										</section>
									</div>
								</div>
							</div>
							<div className="has-text-centered">
								<div className="columns">
									<div className="column is-one-quarter">
										<div className="main-testimonial-sq">
											<img src={bannerImage} alt="Happy foster family" />
										</div>
									</div>
									<div className="column has-text-left">
										<div className="main-testimonial-quote">
											"I love animals. I thought about volunteering at an animal shelter, but felt I
											had to do something more. After moving back to San Diego from Switzerland, I
											decided I wanted to foster as many dogs as I could, but was wondering how to
											go about it ..."
										</div>
										<section className="section">
											<div className="main-testimonial-name ">
												<h3>Foster Mom Alisa & Darcy</h3> with Chihuahua Rescue of San Diego
											</div>
										</section>
									</div>
								</div>
							</div>
							<div className="has-text-centered">
								<div className="columns">
									<div className="column is-one-quarter">
										<div className="main-testimonial-sq">
											<img src={bannerImage} alt="Happy foster family" />
										</div>
									</div>
									<div className="column has-text-left">
										<div className="main-testimonial-quote">
											"I love animals. I thought about volunteering at an animal shelter, but felt I
											had to do something more. After moving back to San Diego from Switzerland, I
											decided I wanted to foster as many dogs as I could, but was wondering how to
											go about it ..."
										</div>
										<section className="section">
											<div className="main-testimonial-name ">
												<h3>Foster Mom Alisa & Darcy</h3> with Chihuahua Rescue of San Diego
											</div>
										</section>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default FostersTails;
