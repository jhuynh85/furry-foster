import React from "react";
import "./CheckedTile.css";

const CheckedTile = props => {
	return (
		<div>
			<div className="checked">
				<div className="columns">
					<div className="column is-one-quarter has-text-right checked-mark">
						{props.checkedImg || <p>✔</p>}
					</div>
					<div className="column">
						<p className="checked-title">
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
