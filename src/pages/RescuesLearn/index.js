import React from "react";
// import Banner from "../../components/Banner";
import Sidebar from "../../components/Sidebar";
import "./RescuesLearn.css";
// import bannerImage from "../../assets/images/ff_website2018_carousel.jpg";
import Button from "../../components/Button";

class RescuesLearn extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="columns">
						<div className="column">
							<section className="section content">
								<h1 className="title is-1">Rescue Organizations</h1>
								<div>
									<h2>Learn About Partnering</h2>
									<p>
										There's a shelter animal who needs you. It doesn't cost you anything to save a
										dog or cat, rescues will pay for food and vet care. Join our community and
										connect with other furry foster parents and their pets. Together we can bring
										every homeless pet home
									</p>
									<br />
								</div>
								<div>
									<Button link="/" text="MORE INFO" />
								</div>
							</section>
						</div>
						<Sidebar />
					</div>
				</div>
			</div>
		);
	}
}

export default RescuesLearn;
