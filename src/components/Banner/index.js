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
					<h1 className="title is-1">{props.text}</h1>
				</div>
			</div>
		</div>
	);
};

export default Banner;
