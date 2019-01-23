import React from "react";
import "./RescuesLearn.css";
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

class RescuesLearn extends React.Component {
	render() {
		return (
			<div>
				<Banner image={bannerImage} text="Partner With Furry Foster" />
				<div className="container">
					<div className="columns">
						<div className="column">
							<section className="section content has-text-centered">
								<div>
									<h2>Find new foster families with Furry Foster.</h2>
									<p>
										Our purpose is to help you find new foster families and provide free services<br />{" "}
										and resources to make sure they're successful.
									</p>
									<br />
								</div>
								<div>
									<Button link="/" text="MORE INFO" />
								</div>
							</section>
						</div>
					</div>
				</div>
				<div className="has-text-centered">
					<section className="section">
						<div className="container">
							<div className="columns">
								<div className="column">
									<div className="content">
										<h3 className="title is-3">Perks of Partnership</h3>
										<CheckedTile checkedTitle="List Available Foster Pets, free" />
										<CheckedTile checkedTitle="Attract New Foster Families" />
										<CheckedTile checkedTitle="Free Services, Food & Accessories" />
										<CheckedTile checkedTitle="Extra promotion for your pets" />
										<CheckedTile checkedTitle="A community for your foster families" />
									</div>
								</div>
								<div className="column">
									<div className="content">
										<h3 className="title is-3">Partnership Qualifications</h3>
										<CheckedTile
											checkedTitle="501(c)3 non-profit"
											checkedBody="Engage in 501(c)3 non-profit activities involved with animal rescue"
										/>
										<CheckedTile
											checkedTitle="Cover Basic Costs"
											checkedBody="Cover basic costs for foster homes including food and vet care"
										/>
										<CheckedTile
											checkedTitle="Review Applications"
											checkedBody="Review foster applications and conduct home checks to ensure the comfort and safety of pets"
										/>
										<CheckedTile
											checkedTitle="Raise Awareness"
											checkedBody="Raise awareness for fostering by linking to FurryFoster.com on their fosters or partners page"
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
												<img src={bannerImage} alt="Happy rescue" />
											</div>
										</div>
										<div className="column has-text-left">
											<div className="main-testimonial-quote">
												"I love animals. I thought about volunteering at an animal shelter, but felt
												I had to do something more. After moving back to San Diego from Switzerland,
												I decided I wanted to foster as many dogs as I could, but was wondering how
												to go about it ..."
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
							<h2 className="title is-2">Join our rescue partners for support.</h2>
							<div>
								<img src={bannerImage} className="circled" alt="circle" />
								<img src={bannerImage} className="circled" alt="circle" />
								<img src={bannerImage} className="circled" alt="circle" />
							</div>
							<p>
								Our partners are made of rescues, shelters, and pet friendly businesses. Together,
								our goal is to bring more pets home.
							</p>
							<Button link="/rescues/apply" text="Apply for Partnership" />
						</div>
					</section>
					<section className="section">
						<div className="container content">
							<h2 className="title is-2">Partner With Furry Foster</h2>
							<div className="content">
								<div className="columns">
									<div className="column">
										<PawTile
											cardTitle="Apply for Partnership"
											cardContent={[
												"Use the ",
												<a href=""> foster finder </a>,
												" to search and inquire about pets"
											]}
										/>
									</div>
									<div className="column">
										<PawTile
											cardTitle="Post Available Pets"
											cardContent={["Submit an application when you find the right pet"]}
										/>
									</div>
									<div className="column">
										<PawTile
											cardTitle="Receive Foster Applications"
											cardContent={["Meet the pet in person (the most fun step)"]}
										/>
									</div>
									<div className="column">
										<PawTile
											cardTitle="Resources to Support Foster Families"
											cardContent={["Welcome your new pet home, temporarily!"]}
										/>
									</div>
								</div>
							</div>
						</div>
					</section>
					<NewsletterBanner />
				</div>
			</div>
		);
	}
}

export default RescuesLearn;
