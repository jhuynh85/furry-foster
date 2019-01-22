import React from "react";
import "./FostersLearn.css";
import Button from "../../components/Button";
import PawTile from "../../components/PawTile";
import CheckedTile from "../../components/CheckedTile";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/ff_website2018_carousel.jpg";
import NewsletterBanner from "../../components/NewsletterBanner";

import pawPattern from "../../assets/images/ff_pattern_white.png";

var sectionStyle = {
	backgroundImage: "url(" + pawPattern + ")",
	backgroundRepeat: "repeat",
	backgroundSize: "10%"
};

class FostersLearn extends React.Component {
	render() {
		return (
			<div className="has-text-centered">
				<Banner image={bannerImage} text="Foster a Pet For a Local Rescue" />
				<section className="section">
					<div className="container">
						<h2 className="title is-2">Fostering a pet is free, fun, and fulfilling.</h2>
						<div className="content">
							<p>
								There's a rescue animal who needs you. It doesn't cost anything to save a dog or
								cat, rescues will pay for food and vet care. Requirements for foster families varies
								for each rescue, so double check with the organization you volunteer for their
								policy. Together we can bring every homeless pet home
							</p>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container">
						<div className="columns">
							<div className="column">
								<div className="content">
									<h3 className="title is-3">Foster Responsibilities</h3>
									<CheckedTile
										checkedTitle="Housing & Care"
										checkedBody="A roof over their head and bed to rest their paws."
									/>
									<CheckedTile
										checkedTitle="Basic Training"
										checkedBody="Training your pet to be a good family member."
									/>
									<CheckedTile
										checkedTitle="Transportation"
										checkedBody="Transporting your pet to events or vet appointments."
									/>
									<CheckedTile
										checkedTitle="Love & Family"
										checkedBody="Plenty of affection for a lonely pet."
									/>
								</div>
							</div>
							<div className="column">
								<div className="content">
									<h3 className="title is-3">Foster Qualifications</h3>
									<CheckedTile
										checkedTitle="18+ Years Old"
										checkedBody="Be 18 years or older and have valid ID."
									/>
									<CheckedTile
										checkedTitle="Pet-friendly Housing"
										checkedBody="Have appropriate housing and landlord approval for a pet."
									/>
									<CheckedTile
										checkedTitle="Ability and Time"
										checkedBody="Enough ability and time to care for, train, and socialize a pet."
									/>
									<CheckedTile
										checkedTitle="Commitment to Fostering"
										checkedBody="Commit to caring for a pet until they are adopted."
									/>
								</div>
							</div>
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
											<img src={bannerImage} />
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
				<section className="section">
					<div className="container content">
						<h2 className="title is-2">Join our network of furry foster families for support.</h2>
						<div className="columns">
							<div className="column is-one-fifth" />
							<div className="column is-one-fifth">
								<img src={bannerImage} className="circled" />
								<h4 className="">Margaret</h4>
								<p>San Diego, CA</p>
							</div>
							<div className="column is-one-fifth">
								<img src={bannerImage} className="circled" />
								<h4 className="">Margaret</h4>
								<p>San Diego, CA</p>
							</div>
							<div className="column is-one-fifth">
								<img src={bannerImage} className="circled" />
								<h4 className="">Margaret</h4>
								<p>San Diego, CA</p>
							</div>
							<div className="column is-one-fifth" />
						</div>
						<p>
							Participate in our community and connect with other furry foster parents and their
							pets. Together we can bring every homeless pet home.
						</p>
						<Button link="/pets" text="Find a foster pet" />
					</div>
				</section>
				<section className="section">
					<div className="container content">
						<h2 className="title is-2">Steps to start fostering</h2>
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
				</section>
				<NewsletterBanner />
			</div>
		);
	}
}

export default FostersLearn;
