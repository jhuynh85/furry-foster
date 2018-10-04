import React from "react";
import "./SearchTile.css";

const SearchTile = props => {
	return (
		<div className={props.className}>
			<a className="searchtile-container" href={props.searchTileURL}>
				<div
					className="searchtile-image"
					style={{
						backgroundImage: "url(" + props.searchTileImage + ")",
						backgroundRepeat: "no-repeat"
					}}>
					<div className="searchtile-overlay">
						<p className="searchtile-header">{props.searchTileHeader}</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default SearchTile;
