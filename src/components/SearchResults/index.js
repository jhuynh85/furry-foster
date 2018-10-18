import React from "react";
import "./SearchResults.css";
import SearchTile from "../../components/SearchTile";

class SearchResults extends React.Component {
	render() {
		return (
			<div>
				<div className="tile is-ancestor search-results">
					<SearchTile
						className="tile is-parent is-3"
						searchTileURL="/pets"
						searchTileImage="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42753794/1/?bust=1536929975&width=1439"
						searchTileName="Platinum"
						searchTileAge="5"
						searchTileGender="female"
						searchTileLocation="San Diego, CA"
					/>
					<SearchTile
						className="tile is-parent is-3"
						searchTileURL="/pets"
						searchTileImage="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42753794/1/?bust=1536929975&width=1439"
						searchTileName="Platinum"
						searchTileAge="5"
						searchTileGender="female"
						searchTileLocation="San Diego, CA"
					/>
					<SearchTile
						className="tile is-parent is-3"
						searchTileURL="/pets"
						searchTileImage="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42753794/1/?bust=1536929975&width=1439"
						searchTileName="Platinum"
						searchTileAge="5"
						searchTileGender="female"
						searchTileLocation="San Diego, CA"
					/>
					<SearchTile
						className="tile is-parent is-3"
						searchTileURL="/pets"
						searchTileImage="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/42753794/1/?bust=1536929975&width=1439"
						searchTileName="Platinum"
						searchTileAge="5"
						searchTileGender="female"
						searchTileLocation="San Diego, CA"
					/>
				</div>
			</div>
		);
	}
}

export default SearchResults;
