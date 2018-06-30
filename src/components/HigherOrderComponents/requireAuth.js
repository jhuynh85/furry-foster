import React, { Component } from "react";
import { connect } from "react-redux";

// This higher order component (HOC) takes a regular component and makes it a protected
// component that requires the user to be authenticated before it is rendered
// If the user is not authenticated, they will automatically be redirected to a default route
export default ChildComponent => {
	class ComposedComponent extends Component {
		componentDidMount() {
			this.shouldNavigateAway();
		}

		componentDidUpdate(prevProps, prevState) {
			this.shouldNavigateAway();
		}

		// Redirects user if they're not authenticated
		shouldNavigateAway = () => {
			if (!this.props.auth) {
				console.log("User not authenticated!");
				this.props.history.push("/");
			}
		};

		render() {
			return <ChildComponent {...this.props} />;
		}
	}

	function mapStateToProps(state) {
		return { auth: state.auth.authenticated };
	}

	return connect(mapStateToProps)(ComposedComponent);
};
