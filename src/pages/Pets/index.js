import React from "react";
import SearchFilters from "../../components/SearchFilters";
import SearchResults from "../../components/SearchResults";
import "./Pets.css";

class Pets extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			petSearchResults: null
		};
	}

	// Updates component state with search results obtained from SearchFilters component
	updateSearchResults = searchResults => {
		this.setState({ petSearchResults: searchResults });
	};

	render() {
		return (
			<div>
				<div className="container ">
					<section className="section content">
						<h1 className="is-size-1">Find Pets</h1>
						<p>19,289 Dogs near 92126</p>
						<div className="columns">
							<div className="column">
								<SearchFilters updateSearchResults={this.updateSearchResults} />
							</div>
						</div>
						<SearchResults results={this.state.petSearchResults} />
					</section>
				</div>
			</div>
		);
	}
}

export default Pets;
