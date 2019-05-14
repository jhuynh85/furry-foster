import React from "react";
import "./NewsletterBanner.css";

const NewsletterBanner = props => {
	return (
		<div>
			<div id="news-banner">
				<section className="hero is-primary is-medium has-text-centered">
					<div className="hero-body">
						<div className="container ">
							<h2 className="title is-2">Stay up-to-date with foster stories and news!</h2>
							<div className="level">
								<div className="level-item">
									<div className="field has-addons">
										<div className="control">
											<input className="input" type="text" placeholder="you@email.com" />
										</div>
										<div className="control">
											<a className="button is-warning">JOIN</a>
										</div>
									</div>
								</div>
							</div>
							<p>Join thousands of fellow foster families and supporters.</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default NewsletterBanner;
