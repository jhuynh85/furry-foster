import React from "react";
import "./PetProfile.css";
import Button from "../../components/Button";
import axios from "axios";
import { toast } from "react-toastify";

// Import image assets
import defaultCatAvatar from "../../assets/images/default_cat_avatar.png";
import defaultDogAvatar from "../../assets/images/default_dog_avatar.png";

class PetProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currentPet: {} };
		this.rescueRef = React.createRef();
	}

	async componentDidMount() {
		// Get pet data
		const petID = this.props.match.params.petID;
		console.log("petID: ", petID);
		const url = `/api/pet/${petID}`;
		try {
			const petData = await axios.get(url);
			this.setState({ currentPet: petData.data[0] });
			console.log("petData: ", petData.data[0]);
		} catch (err) {
			toast.error(err);
			console.log("ERROR: ", err);
		}
	}

	renderGoogleMap = rescue => {
		const MODE = "place";
		const { address1, city, state, zip } = rescue;
		const params = encodeURIComponent(`${address1} ${city} ${state} ${zip}`);
		const URL = `https://www.google.com/maps/embed/v1/${MODE}?key=${
			process.env.REACT_APP_GOOGLE_MAPS_API_KEY
		}&q=${params}`;
		// console.log("Google maps URL: ", URL);
		return <iframe width="100%" height="100%" frameBorder="0" src={URL} allowFullScreen />;
	};

	calculateAge = ageInMonths => {
		let years = Math.floor(ageInMonths / 12);
		let months = ageInMonths % 12;

		let m = { one: "mo", other: "mos" };
		let y = { one: "yr", other: "yrs" };

		let result = [];

		function getPlural(number, word) {
			return (number === 1 && word.one) || word.other;
		}

		years && result.push(years + " " + getPlural(years, y));
		months && result.push(months + " " + getPlural(months, m));
		return (result = result.join(" "));
	};

	calculateWeight = weightInOz => {
		let pounds = Math.floor(weightInOz / 16);
		let ounces = weightInOz % 16;

		let lb = { one: "lb", other: "lbs" };
		let oz = { one: "oz", other: "oz" };

		let result = [];

		function getPlural(number, word) {
			return (number === 1 && word.one) || word.other;
		}

		pounds && result.push(pounds + " " + getPlural(pounds, lb));
		ounces && result.push(ounces + " " + getPlural(ounces, oz));
		return (result = result.join(" "));
	};

	scrollToRescue = () => {
		this.rescueRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
	};

	render() {
		const AGE_ADULT = 36; // Min age in months ADULT pets
		const WEIGHT_LARGE = 896; // Min weight in oz for LARGE pets (896oz = 56lbs)
		const WEIGHT_MEDIUM = 384; // Min weight in oz for MEDIUM pets (384oz = 24lbs)
		const LOREM =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a ipsum viverra metus scelerisque gravida eu non lacus. Nunc sodales dictum semper. Aliquam erat nunc, consectetur ac lobortis in, venenatis sit amet arcu. Nulla faucibus lectus sed quam efficitur, ullamcorper placerat nisl lobortis. Sed placerat quis ex posuere posuere. Nunc tincidunt rutrum lectus, eu pretium tortor scelerisque vitae. Fusce cursus quis mi at feugiat. Duis fringilla sagittis neque, id euismod magna ultricies sit amet. Aliquam ut est arcu. Suspendisse tincidunt diam at felis blandit efficitur. Suspendisse scelerisque feugiat velit in aliquet. Mauris id felis sit amet neque faucibus dictum et et velit. In pellentesque turpis felis, ac rhoncus nunc varius sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam aliquam lobortis sodales. Aenean at vehicula justo. Curabitur quis lacus et sapien sodales suscipit. Aliquam non tortor mattis, rhoncus massa vitae, ornare enim. Nullam vitae dictum lacus. Cras posuere mollis justo ut dictum. In laoreet leo magna, et luctus massa varius sed. Curabitur non tortor blandit, facilisis purus non, ultrices lacus. Aenean eleifend et tellus quis vestibulum. Praesent ut sapien sed orci ultricies scelerisque nec et arcu. Nullam et ante vitae metus posuere tempus eget id nibh. Quisque nisi magna, gravida nec dignissim cursus, congue non augue. Mauris blandit diam eros, in volutpat est pretium ut.";
		let currentPet = this.state.currentPet;
		let currentRescue = this.state.currentPet.rescue;

		return (
			<div>
				<section className="hero is-light">
					<div className="hero-body">
						<div className="container">
							<div className=" content" id="pet-profile-content">
								<div className="columns">
									<div className="column is-two-thirds">
										<div className="pet-profile-image is-horizontal-center is-vertical-center has-text-centered">
											<img
												src={
													this.state.currentPet.images && this.state.currentPet.images.length > 0
														? this.state.currentPet.images[0]
														: this.state.currentPet.type === "cat"
															? defaultCatAvatar
															: defaultDogAvatar
												}
											/>
										</div>
									</div>
									<div className="column is-one-third pet-details-container">
										<h1 className="is-size-1">{this.state.currentPet.name}</h1>
										<p className="is-size-4">
											<span className="detail-label">{this.state.currentPet.gender}</span>
											<br />
											<span className="detail-label">
												{currentPet.ageInMonths > AGE_ADULT ? "ADULT" : "YOUNG"}
											</span>
											&nbsp;
											{currentPet.ageInMonths ? this.calculateAge(currentPet.ageInMonths) : "?"}
											<br />
											<span className="detail-label">
												{currentPet.weightInOz >= WEIGHT_LARGE
													? "LARGE"
													: currentPet.weightInOz >= WEIGHT_MEDIUM
														? "MEDIUM"
														: "SMALL"}
											</span>
											&nbsp;
											{currentPet.weightInOz ? this.calculateWeight(currentPet.weightInOz) : "?"}
										</p>
										<p>
											<span className="icon">
												<i className="fa fa-map-marker" />
											</span>
											<b>
												{currentRescue ? currentRescue.city : "?"},{" "}
												{currentRescue ? currentRescue.state : "?"}
											</b>
										</p>
										<p>
											<a onClick={this.scrollToRescue}>
												Rescued by {currentRescue ? currentRescue.orgName : "?"}
											</a>
										</p>
										<div className="section">
											<div className="columns">
												<div className="column is-one-half">
													<Button
														className="is-large is-fullwidth"
														link="/"
														text="FOSTER ME"
														width="100%"
													/>
												</div>
												<div className="column is-one-half">
													<Button link="/" text="ADOPT ME" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="container">
						<div className="content">
							<div className="content-card">
								<h2 className="is-size-2">
									{this.state.currentPet.name}
									's Info
								</h2>
								<div className="columns">
									<div className="column is-one-fourth">
										<p>
											<span className="icon has-text-warning">
												{this.state.currentPet.features &&
												this.state.currentPet.features.includes("Altered") ? (
													<i className="fa fa-check-square" />
												) : (
													<i className="fa fa-square-o" />
												)}
											</span>
											Altered
										</p>
										<p>
											<span className="icon has-text-warning">
												{this.state.currentPet.features &&
												this.state.currentPet.features.includes("Microchipped") ? (
													<i className="fa fa-check-square" />
												) : (
													<i className="fa fa-square-o" />
												)}
											</span>
											Microchipped
										</p>
										<p>
											<span className="icon has-text-warning">
												{this.state.currentPet.features &&
												this.state.currentPet.features.includes("House-trained") ? (
													<i className="fa fa-check-square" />
												) : (
													<i className="fa fa-square-o" />
												)}
											</span>
											House-trained
										</p>
									</div>
									<div className="column is-one-fourth">
										<p>
											<span className="icon has-text-warning">
												{this.state.currentPet.features &&
												this.state.currentPet.features.includes("Child-friendly") ? (
													<i className="fa fa-check-square" />
												) : (
													<i className="fa fa-square-o" />
												)}
											</span>
											Good With Children
										</p>
										<p>
											<span className="icon has-text-warning">
												{this.state.currentPet.features &&
												this.state.currentPet.features.includes("Cat-friendly") ? (
													<i className="fa fa-check-square" />
												) : (
													<i className="fa fa-square-o" />
												)}
											</span>
											Good With Cats
										</p>
										<p>
											<span className="icon has-text-warning">
												{this.state.currentPet.features &&
												this.state.currentPet.features.includes("Dog-friendly") ? (
													<i className="fa fa-check-square" />
												) : (
													<i className="fa fa-square-o" />
												)}
											</span>
											Good With Dogs
										</p>
									</div>
								</div>
							</div>
							<div className="content-card">
								<h2 className="is-size-2">About {this.state.currentPet.name}</h2>
								<p>{this.state.currentPet.description || LOREM}</p>
							</div>
							<div className="content-card" ref={this.rescueRef}>
								<div className="columns">
									<div className="column">
										<h2 className="is-size-2">{currentRescue ? currentRescue.orgName : "?"}</h2>
										<p>
											{(this.state.currentPet.rescue && this.state.currentPet.rescue.description) ||
												LOREM}
										</p>
										<p className="">
											<span>
												{currentRescue && currentRescue.phone ? (
													<a href={`tel:${currentRescue.phone}`}>{currentRescue.phone}</a>
												) : (
													"??? - ??? - ????"
												)}
											</span>
											<br />
											<span>
												{currentRescue && currentRescue.orgEmail ? (
													<a href={`mailto:${currentRescue.orgEmail}`}>{currentRescue.orgEmail}</a>
												) : (
													"{orgEmail}"
												)}
											</span>
											<br />
											<a
												href={
													currentRescue && currentRescue.websiteURL
														? `http://${currentRescue.websiteURL}`
														: "/"
												}
												target="_blank"
												rel="noopener noreferrer">
												{currentRescue && currentRescue.websiteURL
													? currentRescue.websiteURL
													: "{website}"}
											</a>
										</p>
									</div>
									<div className="column">
										<div className={"google-maps-container is-horizontal-center"}>
											{this.state.currentPet.rescue &&
												this.renderGoogleMap(this.state.currentPet.rescue)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default PetProfile;
