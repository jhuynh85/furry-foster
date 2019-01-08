import React from "react";
import "./Main.css";

//----------------Image assets---------------//
import findIcon from "../../assets/images/ff_website2018_icons_find.png";
import learnIcon from "../../assets/images/ff_website2018_icons_learn.png";
import donateIcon from "../../assets/images/ff_website2018_icons_donate.png";

//----------------Child components------- ---//
import Banner from "../../components/Banner";
import Button from "../../components/Button";
import ImageButton from "../../components/ImageButton";
import NewsletterBanner from "../../components/NewsletterBanner";

class Main extends React.Component {
	componentDidMount() {
		document.title = "Furry Foster";
	}

	render() {
		return (
			<div>
				<section className="hero is-light is-medium main-background-image">
					<div className="hero-body">
						<div className="container">
							<div className="has-text-centered">
								<div>
									<h1 className="title is-1 has-text-white">You can make a difference</h1>
									<p className="subtitle is-4 has-text-white">
										Fostering is free, fun, and fulfilling
									</p>
									<Button link="/about" text="MORE INFO" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="hero is-light is-medium">
					<div className="hero-body">
						<div className="container">
							<div className="has-text-centered">
								<h2 className="title is-2">It's easy to help</h2>
								<p className="subtitle is-4">There are plenty of ways to get involved!</p>
								<div className="columns container is-fluid is-centered">
									<div className="column is-one-quarter">
										<ImageButton
											className="main-image-button"
											link="/pets"
											image={findIcon}
											text="FIND A FOSTER PET"
											infoText="MORE INFO"
											infoLink="/about"
										/>
									</div>
									<div className="column is-one-quarter">
										<ImageButton
											className="main-image-button"
											link="/fosters/learn"
											image={learnIcon}
											text="LEARN ABOUT FOSTERING"
											infoText="MORE INFO"
											infoLink="/about"
										/>
									</div>
									<div className="column is-one-quarter">
										<ImageButton
											className="main-image-button"
											link="/donate"
											image={donateIcon}
											text="MAKE A DONATION"
											infoText="MORE INFO"
											infoLink="/about"
										/>
									</div>
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

export default Main;
