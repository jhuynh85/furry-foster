import React from "react";
import "./SearchResults.css";
import SearchTile from "../../components/SearchTile";

import defaultCatAvatar from "../../assets/images/default_cat_avatar.png";
import defaultDogAvatar from "../../assets/images/default_dog_avatar.png";

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: []
		};
	}

	// Displays all pets in our current results
	render() {
		return (
			<div>
				<div className="tile is-ancestor search-results">
					{this.props.results &&
						this.props.results.map(pet => {
							return (
								<SearchTile
									key={pet._id}
									className="tile is-parent is-3"
									searchTileURL={`/pets/${pet._id}`}
									searchTileImage={
										pet.images[0] || (pet.type === "cat" ? defaultCatAvatar : defaultDogAvatar)
									}
									searchTileName={pet.name}
									searchTileAge={Math.floor(pet.ageInMonths / 12) || ""}
									searchTileGender={pet.gender || ""}
									searchTileLocation={`${pet.rescue.city}, ${pet.rescue.state}`}
								/>
							);
						})}
				</div>
			</div>
		);
	}
}

export default SearchResults;
