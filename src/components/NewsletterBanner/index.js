import React from "react";
import "./NewsletterBanner.css";

const NewsletterBanner = props => {
	return (
		<div>
			<div className="">
				<section class="hero is-primary is-medium has-text-centered">
					<div class="hero-body">
						<div class="container ">
							<h1 class="title is-1">Stay up to date with foster news!</h1>
							<div class="level">
								<div class="level-item">
									<div class="field has-addons">
										<div class="control">
											<input class="input" type="text" placeholder="you@email.com" />
										</div>
										<div class="control">
											<a class="button is-warning">Join</a>
										</div>
									</div>
								</div>
							</div>
							<p>Join thousands of fellow foster families and supporters!</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default NewsletterBanner;
