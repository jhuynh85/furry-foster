import React from "react";
import "./Donate.css";

class Donate extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="columns">
						<div className="column">
							<section className="section content">
								<h1 className="title is-1">Donate</h1>
								<h2>Support our programs and pets.</h2>
								<div className="tile is-ancestor">
									<div className="tile is-vertical">
										<div className="tile ">
											<div className="tile is-parent is-vertical">
												<div className="tile is-child notification is-primary">
													<figure className="image">
														<img src="https://bulma.io/images/placeholders/480x320.png" />
													</figure>
													<div className="">
														<p className="title is-overlay inline-flex is-vertical-center">
															Give Monthly
														</p>
													</div>
												</div>
											</div>
											<div className="tile is-parent is-vertical">
												<div className="tile is-child notification is-primary">
													<figure className="image">
														<img src="https://bulma.io/images/placeholders/480x320.png" />
													</figure>
													<div className="">
														<p className="title is-overlay inline-flex is-vertical-center">
															Give Once
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section className="section content">
								<h2>Furry Foster relies on generous donations and grants.</h2>
								<p>
									Furry Foster is a 501(c)3 federal non-profit organization. Our EIN is 45-4818752.
									Your donation is 100% tax deductible and will be applied towards our programs and
									mission, it's why we're here.
								</p>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Donate;
