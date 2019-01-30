import React from "react";
import "./SearchFilters.css";
import axios from "axios";

// Import constants
const animalBreeds = require("../../assets/js/breeds");
const animalTypes = require("../../assets/js/animalTypes").types;

class SearchFilters extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			animalType: animalTypes[0],
			gender: null,
			breed: null,
			size: null,
			age: null,
			sortBy: "name"
		};
	}

	// Send a search request as soon as the component mounts
	componentDidMount() {
		this.sendSearchRequest();
	}

	// Send a search request if animalType/gender/breed/size/age filter was changed
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (
			prevState.animalType !== this.state.animalType ||
			prevState.gender !== this.state.gender ||
			prevState.breed !== this.state.breed ||
			prevState.size !== this.state.size ||
			prevState.age !== this.state.age
		) {
			this.sendSearchRequest();
		}

		if (prevState.sortBy !== this.state.sortBy) {
			this.props.updateSortType(this.state.sortBy);
		}
	}

	// Returns the proper styling based on the currently-selected sort type
	getSortClassName = sortType => {
		return sortType === this.state.sortBy ? "sort-selected" : "sort-unselected";
	};

	// Returns the proper styling based on the currently-selected filters
	getFilterClassName = (value, filter) => {
		return value === this.state[filter]
			? "checkbox filter-checkbox filter-selected"
			: "checkbox filter-checkbox filter-unselected";
	};

	// Updates component state with new sort type
	setSort = sortType => {
		if (this.state.sortBy !== sortType) this.setState({ sortBy: sortType });
	};

	// Updates component state with new breed value
	setBreed = event => {
		this.setState({ breed: event.target.value });
	};

	// Updates component state with new animal type value and resets all other filters
	setAnimalType = event => {
		this.setState({
			animalType: event.target.value,
			gender: null,
			breed: null,
			size: null,
			age: null
		});
	};

	// Sets the specified filter value to the component state
	setFilter = (value, filter) => {
		this.setState({ [filter]: value });
	};

	// Makes a search request using the current filter values in the component state
	sendSearchRequest = async () => {
		try {
			let query = `?animalType=${this.state.animalType}`;

			if (this.state.gender) {
				query += `&gender=${this.state.gender}`;
			}

			if (this.state.breed) {
				query += `&breed=${this.state.breed}`;
			}

			if (this.state.size) {
				query += `&size=${this.state.size}`;
			}

			if (this.state.age) {
				query += `&age=${this.state.age}`;
			}

			let petSearchResults = await axios.get(`/api/search${query}`);
			console.log(petSearchResults.data);
			this.props.updateSearchResults(petSearchResults.data);
		} catch (e) {
			console.log("Error: ", e);
		}
	};

	render() {
		return (
			<div>
				<form className="columns search-filter-form">
					<div className="column is-inline-flex">
						<div className="field has-addons has-text-centered">
							<p className="control">
								<span className="select is-hover">
									<select onChange={this.setAnimalType}>
										{animalTypes.map((type, index) => {
											return index === 0 ? (
												<option selected key={type} value={type}>
													{type.toUpperCase()}
												</option>
											) : (
												<option key={type} value={type}>
													{type.toUpperCase()}
												</option>
											);
										})}
									</select>
								</span>
							</p>
						</div>
					</div>
					<div className="column is-inline-flex">
						<div className="field has-addons has-text-centered">
							<p className="control">
								<span className="select is-hover">
									<select onChange={this.setBreed}>
										<option selected value={""}>
											ANY
										</option>
										{animalBreeds[this.state.animalType].map(breed => {
											return (
												<option key={breed} value={breed}>
													{breed.toUpperCase()}
												</option>
											);
										})}
									</select>
								</span>
							</p>
						</div>
					</div>
					<div className="column is-inline-flex">
						<div className="field has-addons has-text-centered">
							<label
								className={this.getFilterClassName("male", "gender")}
								onClick={() => this.setFilter("male", "gender")}>
								<input type="checkbox" className="hide-input" />
								Male
							</label>
							<label
								className={this.getFilterClassName("female", "gender")}
								onClick={() => this.setFilter("female", "gender")}>
								<input type="checkbox" className="hide-input" />
								Female
							</label>
						</div>
					</div>
					<div className="column is-inline-flex">
						<div className="field has-addons has-text-centered">
							<label
								className={this.getFilterClassName("small", "size")}
								onClick={() => this.setFilter("small", "size")}>
								<input type="checkbox" className="hide-input" />
								Small
							</label>
							<label
								className={this.getFilterClassName("medium", "size")}
								onClick={() => this.setFilter("medium", "size")}>
								<input type="checkbox" className="hide-input" />
								Medium
							</label>
							<label
								className={this.getFilterClassName("large", "size")}
								onClick={() => this.setFilter("large", "size")}>
								<input type="checkbox" className="hide-input" />
								Large
							</label>
							<label
								className={this.getFilterClassName("xlarge", "size")}
								onClick={() => this.setFilter("xlarge", "size")}>
								<input type="checkbox" className="hide-input" />
								X-Large
							</label>
						</div>
					</div>
					<div className="column is-inline-flex">
						<div className="field has-addons has-text-centered">
							<label
								className={this.getFilterClassName("baby", "age")}
								onClick={() => this.setFilter("baby", "age")}>
								<input type="checkbox" className="hide-input" />
								Baby
							</label>
							<label
								className={this.getFilterClassName("young", "age")}
								onClick={() => this.setFilter("young", "age")}>
								<input type="checkbox" className="hide-input" />
								Young
							</label>
							<label
								className={this.getFilterClassName("adult", "age")}
								onClick={() => this.setFilter("adult", "age")}>
								<input type="checkbox" className="hide-input" />
								Adult
							</label>
							<label
								className={this.getFilterClassName("senior", "age")}
								onClick={() => this.setFilter("senior", "age")}>
								<input type="checkbox" className="hide-input" />
								Senior
							</label>
						</div>
					</div>
				</form>
				Sort by :&nbsp;&nbsp;
				<span
					className={this.getSortClassName("name")}
					onClick={() => {
						this.setSort("name");
					}}>
					Name
				</span>
				&nbsp;&nbsp;|&nbsp;&nbsp;
				<span
					className={this.getSortClassName("newest")}
					onClick={() => {
						this.setSort("newest");
					}}>
					Newest
				</span>
				&nbsp;&nbsp;|&nbsp;&nbsp;
				<span
					className={this.getSortClassName("closest")}
					onClick={() => {
						this.setSort("closest");
					}}>
					Closest
				</span>
			</div>
		);
	}
}

export default SearchFilters;
