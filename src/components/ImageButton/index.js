import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./ImageButton.css";

const ImageButton = props => {
	return (
		<div className={props.className}>
			<Link to={props.link}>
				<img className="image imagebutton-image" src={props.image} alt="" />
			</Link>
			<strong>{props.text}</strong>
			<br />
			<Button link={props.infoLink} text={props.infoText} />
		</div>
	);
};

// Define propTypes
ImageButton.propTypes = {
	className: PropTypes.string,
	link: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	infoLink: PropTypes.string,
	infoText: PropTypes.string
};

export default ImageButton;
