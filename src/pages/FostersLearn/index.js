import React from "react";
import "./FostersLearn.css";
import Button from "../../components/Button";

class FostersLearn extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="columns">
						<div className="column">
							<section className="section content">
								<h1 className="title is-1">Learn About Fostering</h1>
								<div>
									<h2>Learn About Fostering</h2>
									<p>
										There's a shelter animal who needs you. It doesn't cost you anything to save a
										dog or cat, rescues will pay for food and vet care. Join our community and
										connect with other furry foster parents and their pets. Together we can bring
										every homeless pet home
									</p>
									<br />
								</div>

								<div>
									<h2>Foster Responsibilities</h2>
									<ul>
										<li>Housing & Care</li>
										<li>Basic Training</li>
										<li>Transportation</li>
										<li>Love & Family</li>
									</ul>
									<br />
								</div>
								<div>
									<h2>Qualifications</h2>
									<ul>
										<li>18+ Years Old</li>
										<li>Pet-friendly Housing</li>
										<li>Reliable Transportation</li>
										<li>Ability and Time to Care For, Train & Socialize a Pet</li>
										<li>Commitment to Fostering Until Your Pet is Adopted</li>
									</ul>
									<br />
								</div>
								<div>
									<Button link="/" text="MORE INFO" />
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FostersLearn;
