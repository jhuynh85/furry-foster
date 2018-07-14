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

	content = () => {
		if (this.props.link) {
			return (
				<div {...this.props}>
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
		return (
			<div
				{...this.props}
				className={this.state.hover ? "button is-warning is-focused" : "button is-warning"}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}>
				<strong>{this.props.text}</strong>
			</div>
		);
	};

	render() {
		return this.content();
	}
}

// Define propTypes
Button.propTypes = {
	className: PropTypes.string,
	link: PropTypes.string,
	text: PropTypes.string.isRequired
};

export default Button;
