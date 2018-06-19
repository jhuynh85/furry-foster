import React from "react";
import "./Main.css";

//----------------Image assets---------------//
import findIcon from "../../assets/images/ff_website2018_icons_find.png";
import learnIcon from "../../assets/images/ff_website2018_icons_learn.png";
import donateIcon from "../../assets/images/ff_website2018_icons_donate.png";

//----------------Child components------- ---//
import Button from "../../components/Button";
import ImageButton from "../../components/ImageButton";

class Main extends React.Component {
	componentDidMount() {
		document.title = "Furry Foster";
	}

	render() {
		console.log("Created by Joseph Huynh 2018");
		return (
			<div>
				<div className="main-background-image has-text-centered">
					<div>
						<div className="title title-case has-text-white">You can make a difference</div>
						<Button link="/about" text="MORE INFO" />
					</div>
				</div>
				<br />
				<div className="has-text-centered">
					<div className="subtitle title-case">You can make a difference</div>
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
								link="/fosters/learn_about_fostering"
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
		);
	}
}

export default Main;
