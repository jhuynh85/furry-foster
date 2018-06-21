import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Button.css";

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		};
	}

	handleMouseEnter = e => {
		this.setState({ hover: true });
	};

	handleMouseLeave = e => {
		this.setState({ hover: false });
	};

	render() {
		return (
			<div className={this.props.className}>
				<Link
					to={this.props.link}
					className={this.state.hover ? "button is-warning is-focused" : "button is-warning"}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}>
					<strong>{this.props.text}</strong>
				</Link>
			</div>
		);
	}
}

// Define propTypes
Button.propTypes = {
	className: PropTypes.string,
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default Button;
