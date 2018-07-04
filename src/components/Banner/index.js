import React from "react";
import "./Banner.css";

const Banner = props => {
	return (
		<div>
			<div
				className="banner"
				style={{
					backgroundImage: "url(" + props.image + ")",
					backgroundRepeat: "no-repeat"
				}}>
				<div className="banner-text">
					<h2 className="title is-2">{props.text}</h2>
				</div>
			</div>
		</div>
	);
};

export default Banner;
