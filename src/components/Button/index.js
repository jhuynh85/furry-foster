import React from "react";
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
					ref="button"
					className={this.state.hover ? "button is-warning is-focused" : "button is-warning"}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}>
					<strong>{this.props.text}</strong>
				</Link>
			</div>
		);
	}
}

export default Button;
