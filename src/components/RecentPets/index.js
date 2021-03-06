import React from "react";
import "./RecentPets.css";
import SearchTile from "../../components/SearchTile";
import axios from "axios";
import { toast } from "react-toastify";

import defaultCatAvatar from "../../assets/images/default_cat_avatar.png";
import defaultDogAvatar from "../../assets/images/default_dog_avatar.png";

class RecentPets extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: []
		};
	}

	// When the component is mounted, make an API call to backend to get all pets in database
	async componentDidMount() {
		try {
			const petList = await axios.get("/api/pet");
			console.log("petList: ", petList.data);
			this.setState({ results: petList.data });
		} catch (err) {
			toast.error(err);
			console.log("ERROR: ", err);
		}
	}

	// Displays all pets in our current results
	render() {
		return (
			<div>
				<div className="tile is-ancestor recent-pets">
					{this.state.results &&
						this.state.results.map(pet => {
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

export default RecentPets;
