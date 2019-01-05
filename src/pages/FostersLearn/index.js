import React from "react";
import "./FostersLearn.css";
import Button from "../../components/Button";
import PawTile from "../../components/PawTile";
import CheckedTile from "../../components/CheckedTile";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/ff_website2018_carousel.jpg";
import NewsletterBanner from "../../components/NewsletterBanner";

class FostersLearn extends React.Component {
	render() {
		return (
			<div className="has-text-centered">
				<Banner image={bannerImage} text="Foster a Pet For a Local Rescue" />
				<section className="section">
					<div className="container">
						<div className="content">
							<h2 className="subtitle">Fostering a pet is free, fun, and fulfilling.</h2>
							<p>
								There's a rescue animal who needs you. It doesn't cost you anything to save a dog or
								cat, rescues will pay for food and vet care. All of our rescue partners pay for food
								and vet care. Requirements for foster families varies for each rescue, so double
								check with the organization you volunteer for their policy. Together we can bring
								every homeless pet home
							</p>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container">
						<div className="columns">
							<div className="column">
								<div className="content">
									<h3>Foster Responsibilities</h3>
									<div className="checked">
										<p>
											<b>Housing & Care</b>
										</p>
										<p>A roof over their head and bed to rest their paws.</p>
									</div>
									<div className="checked">
										<p>
											<b>Basic Training</b>
										</p>
										<p>Training your pet to be a good family member.</p>
									</div>
									<div className="checked">
										<p>
											<b>Transportation</b>
										</p>
										<p>Transporting your pet to events or vet appointments.</p>
									</div>
									<div className="checked">
										<p>
											<b>Love & Family</b>
										</p>
										<p>Plenty of affection for a lonely pet.</p>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="content">
									<h3>Foster Qualifications</h3>
									<div className="checked">
										<p>
											<b>18+ Years Old</b>
										</p>
										<p>Be 18 years or older and have valid ID.</p>
									</div>
									<div className="checked">
										<p>
											<b>Pet-friendly Housing</b>
										</p>
										<p>Have appropriate housing and landlord approval for a pet.</p>
									</div>
									<div className="checked">
										<p>
											<b>Ability and Time</b>
										</p>
										<p>Enough ability and time to care for, train, and socialize a pet.</p>
									</div>
									<div className="checked">
										<p>
											<b>Commitment to Fostering</b>
										</p>
										<p>Commit to caring for a pet until they are adopted.</p>
									</div>
									<CheckedTile
										checkedTitle="Commitment to Fostering"
										checkedBody="Commit to caring for a pet until they are adopted."
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container">
						<div className="columns">
							<div className="column">
								<div className="card">
									<div className="card-image">
										<img src={bannerImage} alt="Placeholder banner" />
									</div>
									<div className="card-content">
										<div className="content">
											<p>
												You cannot know how much joy Canela has given me sine she arrived. She still
												has her fear of men but I am using some training methods I got on the
												internet and she is slowly coming around! She is smart as a whip and never
												leaves my side. I am totally and completely in love. We are taking it one
												day at a time! Thank you for my little princess.
											</p>
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
											<p>
												Furry Foster has helped a homeless cat in my neightborhood to get foster
												care and (hopefully soon) a forever home
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container content">
						<h2>Join our network of furry foster families for support.</h2>
						<div>
							<img src={bannerImage} className="circled" />
							<img src={bannerImage} className="circled" />
							<img src={bannerImage} className="circled" />
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
						<h2>Steps to start fostering</h2>
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
