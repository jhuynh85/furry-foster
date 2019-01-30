import React from "react";
import Banner from "../../components/Banner";
import Tile from "../../components/Tile";
import "./Fosters.css";
import bannerImage from "../../assets/images/ff_website2018_carousel.jpg";
import NewsletterBanner from "../../components/NewsletterBanner";
import FosterSteps from "../../components/FosterSteps";

class Fosters extends React.Component {
	render() {
		return (
			<div>
				<Banner image={bannerImage} text="Foster Families" />
				<section className="section">
					<div className="container">
						<div className="content">
							<p className="sibtitle is-size-4 has-text-centered">
								Fostering is free, fun, and fulfilling. <br />
								We make it easier with support and resources.
							</p>
						</div>
					</div>
				</section>
				<section className="hero is-warning is-medium has-text-centered">
					<div className="hero-body">
						<div className="container">
							<h2 className="title is-2">Everything You Need to Foster</h2>
							<section className="section">
								<div className="columns">
									<div className="column">
										<Tile
											className=""
											tileURL="/pets"
											tileImage="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42764000/1/?bust=1537026729"
											tileHeader="Find a Furry Foster Pet"
										/>
									</div>
									<div className="column">
										<Tile
											className=""
											tileURL="/pets"
											tileImage="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42764000/1/?bust=1537026729"
											tileHeader="Learn About Fostering"
										/>
									</div>
									<div className="column">
										<Tile
											className=""
											tileURL="/pets"
											tileImage="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42764000/1/?bust=1537026729"
											tileHeader="Get Foster Resources"
										/>
									</div>
								</div>
							</section>
						</div>
					</div>
				</section>

				<FosterSteps />
				<section className="hero is-medium has-text-centered">
					<div className="hero-body">
						<div className="container">
							<h2 className="title is-2">Feature your foster pets on social media</h2>
							<section className="section">
								<div className="columns">
									<div className="column">
										<Tile
											className=""
											tileURL="/pets"
											tileImage=""
											tileHeader={<i className="fa fa-instagram fa-1x" aria-hidden="true" />}
										/>
									</div>
									<div className="column">
										<Tile
											className=""
											tileURL="/pets"
											tileImage=""
											tileHeader={<i className="fa fa-facebook fa-1x" aria-hidden="true" />}
										/>
									</div>
									<div className="column">
										<Tile
											className=""
											tileURL="/pets"
											tileImage=""
											tileHeader={<i className="fa fa-twitter fa-1x" aria-hidden="true" />}
										/>
									</div>
								</div>
							</section>
							<div>
								<p>Pick your platform, follow us, and tag your foster and adoptable pets. </p>
							</div>
						</div>
					</div>
				</section>
				<NewsletterBanner />
			</div>
		);
	}
}

export default Fosters;
