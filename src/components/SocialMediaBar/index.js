import React from "react";
import "./SocialMediaBar.css";

const SocialMediaBar = () => {
	return (
		<div className="social-media-bar level">
			<div className="level-left">Share your foster stories and pictures!</div>
			<div className="level-right">
				<a href="http://www.facebook.com/furryfoster" target="_blank" rel="noopener noreferrer">
					<i className="fa fa-facebook fa-1x" aria-hidden="true" />
				</a>
				&nbsp;&nbsp;&nbsp;
				<a href="http://www.twitter.com/furryfoster" target="_blank" rel="noopener noreferrer">
					<i className="fa fa-twitter fa-1x" aria-hidden="true" />
				</a>
				&nbsp;&nbsp;&nbsp;
				<a
					href="http://www.instagram.com/furryfosterpets"
					target="_blank"
					rel="noopener noreferrer">
					<i className="fa fa-instagram fa-1x" aria-hidden="true" />
				</a>
			</div>
		</div>
	);
};

export default SocialMediaBar;
