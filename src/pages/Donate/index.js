import React from "react";
import Tile from "../../components/Tile";
import "./Donate.css";

class Donate extends React.Component {
	render() {
		return (
			<div>
				<section className="section">
					<div className="container">
						<div className="content">
							<h1 className="title is-1 has-text-centered">Donate</h1>
							<h2 className="sibtitle is-2 has-text-centered">
								Furry Foster doesn't exist without your support.<br /> If you can't foster, please
								donate to help our programs and pets.
							</h2>
						</div>
					</div>
				</section>
				<section className="section content">
					<div className="container">
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
								<section className="section content has-text-centered">
									<h2>Furry Foster relies on generous donations and grants.</h2>
									<p>
										Furry Foster is a 501(c)3 federal non-profit organization. Our EIN is
										45-4818752. Your donation is 100% tax deductible and will be applied towards our
										programs and mission, it's why we're here.
									</p>
									<p>
										Your contribution helps us save the lives of shelter pets and support furry
										foster families with free services.
									</p>
									<p>
										We spend these funds quickly and efficiently, to make the most impact for pets
										at risk. You can help us fund local programs like daycare and training and
										deliver food and accessories to furry foster homes that keep animals out of the
										shelter.
									</p>
								</section>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Donate;
