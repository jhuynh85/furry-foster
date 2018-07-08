import React from "react";
import "./Tabs.css";

class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 0
		};
	}

	renderTitles() {
		function labels(child, index) {
			let activeClass = this.state.selected === index ? "active" : "";
			return (
				<li key={index} name={index}>
					<a href="#" className={activeClass} onClick={this.handleClick.bind(this, index)}>
						{child.props.label}
					</a>
				</li>
			);
		}
		return <ul className="tabs__labels">{this.props.children.map(labels.bind(this))}</ul>;
	}

	renderContent() {
		return <div className="tabs__content">{this.props.children[this.state.selected]}</div>;
	}

	handleClick(index, event) {
		event.preventDefault();
		this.setState({
			selected: index
		});

		console.log("button clicking");
	}

	render() {
		return (
			<div>
				{this.renderTitles()}
				{this.renderContent()}
			</div>
		);
	}
}
export default Tabs;
