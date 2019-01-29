import React from "react";
import SearchFilters from "../../components/SearchFilters";
import SearchResults from "../../components/SearchResults";
import "./Pets.css";

class Pets extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			petSearchResults: null,
			sortBy: "newest"
		};
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// Sorts the current results if the sortType changes
		if (prevState.sortBy !== this.state.sortBy) {
			this.setState({ petSearchResults: this.sortResults(this.state.petSearchResults) });
		}
	}

	// Updates component state with search results obtained from SearchFilters component
	// (Passed to SearchFilters component)
	updateSearchResults = newSearchResults => {
		this.setState({ petSearchResults: this.sortResults(newSearchResults) });
	};

	// Updates component state with the sorting type the user has selected
	// (Passed to SearchFilters component)
	updateSortType = sortType => {
		this.setState({ sortBy: sortType });
	};

	// Sorts the given results based on the sort type currently set inside the component state
	sortResults = results => {
		// Copy results to new array
		let newSortedResults = results.slice();
		// Sort new array and re-assign to state
		if (this.state.sortBy === "newest") {
			return newSortedResults.sort(this.sortByNewestComparator);
		}

		if (this.state.sortBy === "closest") {
			// Check if geolocation is supported
			if (navigator.geolocation) {
				return newSortedResults.sort(this.sortByClosestComparator);
			}
		}
	};

	// Comparator function to sort by newest
	sortByNewestComparator = (petA, petB) => {
		const dateA = new Date(petA.createdAt);
		const dateB = new Date(petB.createdAt);
		return dateB - dateA;
	};

	// Comparator function to sort by distance
	sortByClosestComparator = (petA, petB) => {
		// navigator.geolocation.getCurrentPosition(function(position) {
		// 	this.getDistanceFromPetToUser(position.coords.latitude, position.coords.longitude);
		// });
	};

	// Calculates the distance between the pet (using Rescue's address) and the user (geolocation)
	getDistanceFromPetToUser = (userLoc, petLoc) => {};

	render() {
		return (
			<div>
				<div className="container ">
					<section className="section content">
						<h1 className="is-size-1">Find Pets</h1>
						<p>19,289 Dogs near 92126</p>
						<div className="columns">
							<div className="column">
								<SearchFilters
									updateSearchResults={this.updateSearchResults}
									updateSortType={this.updateSortType}
								/>
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
