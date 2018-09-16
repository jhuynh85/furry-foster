import React from "react";
import "./Tile.css";

const Tile = props => {
	return (
		<div>
			<a className="tile-container" href={props.tileURL}>
				<div
					className="tile-image"
					style={{
						backgroundImage: "url(" + props.tileImage + ")",
						backgroundRepeat: "no-repeat"
					}}>
					<div className="tile-overlay">
						<p className="tile-header is-size-2">{props.tileHeader}</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Tile;
