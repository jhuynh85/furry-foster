import React from "react";
import Banner from "../../components/Banner";
import CheckedTile from "../../components/CheckedTile";
import Sidebar from "../../components/Sidebar";
import "./Fosters.css";
import bannerImage from "../../assets/images/ff_website2018_carousel.jpg";
import Button from "../../components/Button";

class Fosters extends React.Component {
	render() {
		return (
			<div>
				<Banner image={bannerImage} text="Foster Families" />
				<div className="container">
					<div className="columns">
						<div className="column">
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
							<section className="section content">
								<h1 className="title is-1">Find a Foster Pet</h1>
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

export default Fosters;
