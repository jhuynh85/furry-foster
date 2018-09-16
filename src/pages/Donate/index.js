import React from "react";
import Tile from "../../components/Tile";
import "./Donate.css";

class Donate extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<section className="section content">
						<h1 className="title is-1">Donate</h1>
						<h2>Support our programs and pets.</h2>

						<div className="columns">
							<div className="column">
								<section className="content">
									<Tile
										className=""
										tileURL="/pets"
										tileImage="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42764000/1/?bust=1537026729"
										tileHeader="Donate Once"
									/>
								</section>
							</div>
							<div className="column">
								<section className="content">
									<Tile
										className=""
										tileURL="/pets"
										tileImage="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42753794/1/?bust=1536929975&width=1439"
										tileHeader="Donate Monthly"
									/>
								</section>
							</div>
						</div>
						<div className="columns">
							<div className="column">
								<section className="section content">
									<h2>Furry Foster relies on generous donations and grants.</h2>
									<p>
										Furry Foster is a 501(c)3 federal non-profit organization. Our EIN is
										45-4818752. Your donation is 100% tax deductible and will be applied towards our
										programs and mission, it's why we're here.
									</p>
								</section>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default Donate;
