import React from "react";
import "./Main.css";

//----------------Image assets---------------//
import findIcon from "../../assets/images/ff_website2018_icons_find.png";
import learnIcon from "../../assets/images/ff_website2018_icons_learn.png";
import donateIcon from "../../assets/images/ff_website2018_icons_donate.png";

//----------------Child components------- ---//
import Button from "../../components/Button";
import Search from "../../components/Search";
import Pane from "../../components/Pane";
import NewsletterBanner from "../../components/NewsletterBanner";
import RecentPets from "../../components/RecentPets";
import bannerImage from "../../assets/images/ff_website2018_carousel.jpg";
import Tile from "../../components/Tile";

class Main extends React.Component {
	componentDidMount() {
		document.title = "Furry Foster";
	}

	render() {
		return (
			<div>
				<section className="hero is-light is-medium main-bg-image main-bg-container">
					<div className="hero-body">
						<div className="container">
							<div className="columns">
								<div className="column">
									<h1 className="title is-1 has-text-white">You can make a difference</h1>
									<p className="subtitle is-4 has-text-white">Find a pet who needs your help.</p>
									<div className="header-search-container">
										<div className="header-search-input-bar">
											<Search />
										</div>
									</div>
								</div>
								<div className="column" />
							</div>
						</div>
					</div>
				</section>
				<section className="hero is-warning is-medium">
					<div className="hero-body">
						<div className="container">
							<div className="has-text-centered">
								<h2 className="title is-2">Homeless Pets Who Need You</h2>
								<br />
								<RecentPets />
								<br />
								<Button className="" link="/pets" text="Find A Foster Pet" />
							</div>
						</div>
					</div>
				</section>
				<section className="hero is-pattern is-medium">
					<div className="hero-body">
						<div className="container">
							<div className="has-text-centered">
								<section className="section content">
									<h2 className="title is-2">It's easy to help</h2>

									<p className="subtitle is-4">There are plenty of ways to get involved!</p>
								</section>
								<div className="columns container is-fluid is-centered">
									<div className="column is-one-third">
										<Tile
											className=""
											tileURL="/pets"
											tileImage=""
											tileHeader={
												<div>
													<img src={findIcon} alt="share" />
													<p>Share</p>
												</div>
											}
										/>
									</div>
									<div className="column is-one-third">
										<Tile
											className=""
											tileURL="/foster"
											tileImage=""
											tileHeader={
												<div>
													<img src={learnIcon} alt="foster" />
													<p>Foster</p>
												</div>
											}
										/>
									</div>
									<div className="column is-one-third">
										<Tile
											className=""
											tileURL="/foster"
											tileImage=""
											tileHeader={
												<div>
													<img src={donateIcon} alt="donate" />
													<p>Donate</p>
												</div>
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="hero is-warning is-medium">
					<div className="hero-body">
						<div className="container">
							<div className="has-text-centered">
								<section className="section">
									<h2 className="title is-2">Happy Foster Stories</h2>
								</section>
								<section>
									<div className="columns">
										<div className="column has-text-centered">
											<div className="main-testimonial-sq">"</div>
											<div className="main-testimonial-quote">
												I love animals. I thought about volunteering at an animal shelter, but felt
												I had to do something more. After moving back to San Diego from Switzerland,
												I decided I wanted to foster as many dogs as I could, but was wondering how
												to go about it ...
												<div className="main-testimonial-name ">
													- Foster Mom Alisa & Darcy, Chihuahua Rescue of San Diego
												</div>
											</div>
										</div>
										<div className="column has-text-centered">
											<div className="main-testimonial-sq">"</div>
											<div className="main-testimonial-quote">
												I love animals. I thought about volunteering at an animal shelter, but felt
												I had to do something more. After moving back to San Diego from Switzerland,
												I decided I wanted to foster as many dogs as I could, but was wondering how
												to go about it ...
												<div className="main-testimonial-name ">
													- Foster Mom Alisa & Darcy, Chihuahua Rescue of San Diego
												</div>
											</div>
										</div>
									</div>
									<div className="columns">
										<div className="column has-text-centered">
											<div className="main-testimonial-sq">"</div>
											<div className="main-testimonial-quote">
												I love animals. I thought about volunteering at an animal shelter, but felt
												I had to do something more. After moving back to San Diego from Switzerland,
												I decided I wanted to foster as many dogs as I could, but was wondering how
												to go about it ...
												<div className="main-testimonial-name ">
													- Foster Mom Alisa & Darcy, Chihuahua Rescue of San Diego
												</div>
											</div>
										</div>
										<div className="column has-text-centered">
											<div className="main-testimonial-sq">"</div>
											<div className="main-testimonial-quote">
												I love animals. I thought about volunteering at an animal shelter, but felt
												I had to do something more. After moving back to San Diego from Switzerland,
												I decided I wanted to foster as many dogs as I could, but was wondering how
												to go about it ...
												<div className="main-testimonial-name ">
													- Foster Mom Alisa & Darcy, Chihuahua Rescue of San Diego
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</section>
				<NewsletterBanner />
			</div>
		);
	}
}

export default Main;
