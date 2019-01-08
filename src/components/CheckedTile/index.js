import React from "react";
import "./CheckedTile.css";

const CheckedTile = props => {
	return (
		<div>
			<div className="checked">
				<div className="columns">
					<div className="column is-one-quarter">{props.checkedImg ? <p>&#x2714</p> : ""}</div>
					<div className="column">
						<p>
							<b>{props.checkedTitle}</b>
						</p>
						<p>{props.checkedBody}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckedTile;
