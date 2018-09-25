import React from "react";
import "./FostersTails.css";
import Button from "../../components/Button";

class FostersTails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	currentPet = {
		breed: ["Aidi", "Australian Shepherd"],
		color: [],
		features: ["House-trained"],
		images: [],
		availability: ["Foster"],
		_id: "5b5bf35ce0f37d072251faef",
		name: "Bob",
		type: "dog",
		description: "lkjsdfoi",
		gender: "female",
		weightInOz: 150,
		ageInMonths: 30,
		rescue: "5b5bf31de0f37d072251faee",
		createdAt: "2018-07-28T04:38:52.220Z",
		updatedAt: "2018-07-28T04:38:52.220Z",
		__v: 0
	};

	render() {
		return (
			<div>
				<div className="container">
					<div className="section content">
						<div className="columns">
							<div className="column is-one-half">
								<img src="https://via.placeholder.com/3000x2000" />
							</div>
							<div className="column is-one-half">
								<h1 className="is-size-1">{this.currentPet.name}</h1>
								<h3 className="is-size-3">
									{this.currentPet.ageInMonths} | {this.currentPet.gender} |{" "}
									{this.currentPet.weightInOz}
								</h3>
								<span className="icon">
									<i className="fa fa-map-marker" />
								</span>
								<span>San Diego, CA</span>
								<h3 className="is-size-3">{this.currentPet.rescue}</h3>
								<div>
									<p>
										<Button link="/" text="Foster" />
										<Button link="/" text="Adopt" />
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="section content">
						<h2 className="is-size-2">Ivy's Info</h2>
						<div className="columns">
							<div className="column is-one-half">
								{this.currentPet.features}
								<p>Altered:</p>
								<p>Microchipped:</p>
								<p>Housetrained:</p>
							</div>
							<div className="column is-one-half">
								<p>Good With Children</p>
								<p>Good With Cats</p>
								<p>Good With Dogs</p>
							</div>
						</div>
					</div>
					<div className="section content">
						<h2 className="is-size-2">About Ivy</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a ipsum viverra
							metus scelerisque gravida eu non lacus. Nunc sodales dictum semper. Aliquam erat nunc,
							consectetur ac lobortis in, venenatis sit amet arcu. Nulla faucibus lectus sed quam
							efficitur, ullamcorper placerat nisl lobortis. Sed placerat quis ex posuere posuere.
							Nunc tincidunt rutrum lectus, eu pretium tortor scelerisque vitae. Fusce cursus quis
							mi at feugiat. Duis fringilla sagittis neque, id euismod magna ultricies sit amet.
							Aliquam ut est arcu. Suspendisse tincidunt diam at felis blandit efficitur.
							Suspendisse scelerisque feugiat velit in aliquet. Mauris id felis sit amet neque
							faucibus dictum et et velit. In pellentesque turpis felis, ac rhoncus nunc varius sit
							amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
							turpis egestas. Etiam aliquam lobortis sodales. Aenean at vehicula justo. Curabitur
							quis lacus et sapien sodales suscipit. Aliquam non tortor mattis, rhoncus massa vitae,
							ornare enim. Nullam vitae dictum lacus. Cras posuere mollis justo ut dictum. In
							laoreet leo magna, et luctus massa varius sed. Curabitur non tortor blandit, facilisis
							purus non, ultrices lacus. Aenean eleifend et tellus quis vestibulum. Praesent ut
							sapien sed orci ultricies scelerisque nec et arcu. Nullam et ante vitae metus posuere
							tempus eget id nibh. Quisque nisi magna, gravida nec dignissim cursus, congue non
							augue. Mauris blandit diam eros, in volutpat est pretium ut.
						</p>
					</div>
					<div className="section content">
						<div className="columns">
							<div className="column">
								<h2 className="is-size-2">Rescue Name</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a ipsum
									viverra metus scelerisque gravida eu non lacus. Nunc sodales dictum semper.
									Aliquam erat nunc, consectetur ac lobortis in, venenatis sit amet arcu. Nulla
									faucibus lectus sed quam efficitur, ullamcorper placerat nisl lobortis. Sed
									placerat quis ex posuere posuere. Nunc tincidunt rutrum lectus, eu pretium tortor
									scelerisque vitae. Fusce cursus quis mi at feugiat. Duis fringilla sagittis neque,
									id euismod magna ultricies sit amet. Aliquam ut est arcu. Suspendisse tincidunt
									diam at felis blandit efficitur. Suspendisse scelerisque feugiat velit in aliquet.
									Mauris id felis sit amet neque faucibus dictum et et velit ... Read More
								</p>
								<h4 className="is-size-4">
									<a href="">Rescue Phone</a>
								</h4>
								<h4 className="is-size-4">
									<a href="">Rescue Email</a>
								</h4>
								<h4 className="is-size-4">
									<a href="">Rescue Website</a>
								</h4>
							</div>
							<div className="column">
								<div>Google maps here</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FostersTails;
