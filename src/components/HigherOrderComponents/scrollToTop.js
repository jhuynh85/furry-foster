import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			// Scroll to the top when page is mounted
			document.body.scrollTop = 0;
		}
	}

	render() {
		return this.props.children;
	}
}

export default withRouter(ScrollToTop);
