import React from "react";
import "./Banner.css";

const Banner = props => {
	return (
		<div>
			<div
				className="banner-image"
				style={{
					backgroundImage: "url(" + props.image + ")",
					backgroundRepeat: "no-repeat"
				}}>
				<div className="banner-overlay">
					<h1 className="banner-header is-size-1">{props.text}</h1>
				</div>
			</div>
		</div>
	);
};

export default Banner;
