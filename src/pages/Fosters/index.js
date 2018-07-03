import React from "react";
import Banner from "../../components/Banner";
import Sidebar from "../../components/Sidebar";
import "./Fosters.css";
import bannerImage from "../../assets/images/ff_website2018_carousel.jpg";

class Fosters extends React.Component {
	render() {
		return (
			<div>
				<Banner image={bannerImage} text="Fosters page" />
				<div className="container">
					<div className="columns">
						<div className="column">
							<section className="section">
								<h1 className="title">Fosters page</h1>
								<div>
									<h2 className="title">Learn About Fostering</h2>
									<h3 className="subtitle">Fostering A Pet is Fulfilling, Fun, and Free.</h3>
									<p>
										There's a shelter animal who needs you. It doesn't cost you anything to save a
										dog or cat, rescues will pay for food and vet care. Join our community and
										connect with other furry foster parents and their pets. Together we can bring
										every homeless pet home
									</p>
									<br />
								</div>

								<div>
									<h2 className="title">Foster Responsibilities</h2>
									<h3 className="subtitle">
										Help dogs and cats successfully transition from the shelter to their adoptive
										homes.
									</h3>
									<ul>
										<li>Housing & Care</li>
										<li>Basic Training</li>
										<li>Basic Training</li>
										<li>Transportation</li>
										<li>Love & Family</li>
									</ul>
									<br />
								</div>
								<div>
									<h2 className="title">Qualifications</h2>
									<h3 className="subtitle">
										If you meet the criteria above, there's a shelter pet waiting to meet you.
									</h3>
									<ul>
										<li>18+ Years Old</li>
										<li>Pet Friendly Housing</li>
										<li>Reliable Transportation</li>
										<li>Ability and Time to Care For, Train & Socialize a Pet</li>
										<li>Commitment to Fostering Until Your Pet is Adopted</li>
									</ul>
									<br />
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

export default Fosters;
