import React from "react";
import SearchFilters from "../../components/SearchFilters";
import "./Pets.css";

class Pets extends React.Component {
	render() {
		return (
			<div>
				<div className="container content">
					<h1>Pets page</h1>
					<SearchFilters />
					<div className="columns">
						<div className="column in-one-quarter">
							<h2>MAP HERE</h2>
						</div>
						<div className="column">
							<h2>RESULTS HERE</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Pets;
