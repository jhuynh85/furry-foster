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
		weightInOz: 100,
		ageInMonths: 20,
		rescue: "5b5bf31de0f37d072251faee",
		createdAt: "2018-07-28T04:38:52.220Z",
		updatedAt: "2018-07-28T04:38:52.220Z",
		__v: 0
	};

	currentRescue = {
		__v: 0,
		_id: "5b9705296fa9d706dc333d35",
		address1: "Somewhere here",
		city: "San Diego",
		createdAt: "2018-09-10T23:58:33.656Z",
		ein: "12-4243522",
		email: "rescue@gmail.com",
		images: Array[0],
		isApproved: true,
		orgEmail: "rescue@gmail.com",
		orgName: "Dog Rescue",
		password: "$2a$10$vr9tY0T.KNpun5oPGfpXHOB.2hB4gfynXr4pne3kz0L1INa44mxYC",
		pets: Array[0],
		phone: "757-284-9817",
		state: "CA",
		updatedAt: "2018-09-10T23:58:33.656Z",
		userType: "rescue",
		websiteURL: "www.rescues.com",
		zip: 92126
	};

	calculateAge = ageInMonths => {
		let newAge = years;

		console.log(newAge);

		let years = Math.floor(ageInMonths / 12);
		let months = ageInMonths % 12;

		let m = { one: "month", other: "months" };
		let y = { one: "year", other: "years" };

		let result = [];

		function getPlural(number, word) {
			return (number === 1 && word.one) || word.other;
		}

		years && result.push(years + " " + getPlural(years, y));
		months && result.push(months + " " + getPlural(months, m));
		return (result = result.join(" "));

		return result;
	};

	calculateWeight = weightInOz => {
		let newWeight = pounds;

		console.log(newWeight);

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

		return result;
	};

	render() {
		return (
			<div>
				<section className="hero is-primary">
					<div className="hero-body">
						<div className="container">
							<div className="section content">
								<div className="columns">
									<div className="column is-one-half">
										<img src="https://via.placeholder.com/3000x2000" />
									</div>
									<div className="column is-one-half">
										<h1 className="is-size-1">{this.currentPet.name}</h1>
										<p className="is-size-4">
											<span>{this.calculateAge(this.currentPet.ageInMonths)}</span> <br />
											<span>{this.currentPet.gender}</span>
											<br />
											<span>{this.calculateWeight(this.currentPet.weightInOz)}</span>
										</p>
										<span className="icon">
											<i className="fa fa-map-marker" />
										</span>
										<span>San Diego, CA</span>
										<br />
										<a>Cared for by: {this.currentRescue.orgName}</a>
										<br />
										<div className="one-line-align-left">
											<Button link="/" text="FOSTER" />
											&nbsp;&nbsp;&nbsp;
											<Button link="/" text="ADOPT" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="container">
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
								<h2 className="is-size-2">{this.currentRescue.orgName}</h2>
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
								<p className="">
									<span>{this.currentRescue.phone}</span>
									<br />
									<span>{this.currentRescue.email}</span>
									<br />
									<a href={this.currentRescue.websiteURL}>{this.currentRescue.websiteURL}</a>
								</p>
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
