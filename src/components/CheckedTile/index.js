import React from "react";
import "./CheckedTile.css";

const CheckedTile = props => {
	return (
		<div>
			<div className="checked">
				<img src={props.checkedImg} />
				<p>
					<b>{props.checkedTitle}</b>
				</p>
				<p>{props.checkedBody}</p>
			</div>
		</div>
	);
};

export default CheckedTile;
