import React from "react";
import "./PawTile.css";

const PawTile = props => {
	return (
		<div>
			<div className="card">
				<div className="card-header" />
				<div className="card-body">
					<div className="card-title">
						<h3>{props.cardTitle}</h3>
					</div>
					<div className="card-content">
						<div className="content">{props.cardContent}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PawTile;
