import React from "react";
import "./Rescues.css";

import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/ff_website2018_carousel.jpg";
import Button from "../../components/Button";
import CheckedTile from "../../components/CheckedTile";

class Rescues extends React.Component {
	componentDidMount() {
		document.title = "Rescues";
	}

	render() {
		return (
			<div>
				<Banner image={bannerImage} text="Rescue Organizations" />
				<section className="section">
					<div className="container">
						<div className="content">
							<h2 className="sibtitle is-2 has-text-centered">
								Find new foster families with Furry Foster. <br />
								We help you find and educate new foster families.
							</h2>
						</div>
					</div>
				</section>
				<div className="container has-text-centered">
					<div className="columns">
						<div className="column">
							<section className="section content">
								<h1 className="title is-1">Find a Foster Pet</h1>
								<div>
									<Button link="/" text="MORE INFO" />
								</div>
							</section>
							<section className="section content">
								<h1 className="title is-1">Get Free Foster Resources</h1>
								<div>
									<Button link="/" text="MORE INFO" />
								</div>
							</section>
							<section className="section content">
								<h1 className="title is-1">Feature your foster pets on social media</h1>
								<div>
									<Button link="/" text="MORE INFO" />
								</div>
							</section>

							<section className="section">
								<div className="container">
									<div className="columns">
										<div className="column">
											<div className="content">
												<h3>Feature your foster pets on social media</h3>
											</div>
										</div>
										<div className="column">
											<div className="content">
												<h3>Foster Qualifications</h3>
												<CheckedTile
													checkedImg={[<i class="fas fa-home" />]}
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
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Rescues;
