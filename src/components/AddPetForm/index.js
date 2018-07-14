import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions";
import "./AddPetForm.css";

const breeds = require("../../assets/js/breeds");
const animalTypes = require("../../assets/js/animalTypes").types;

class AddPetForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedAnimalType: null
		};
	}

	// Renders radio button fields for all animals listed in the animalTypes.js file
	renderAnimalTypesFields = () => {
		return animalTypes.map(type => {
			return (
				<label key={type + "Label"} className="radio">
					<Field type="radio" component={"input"} value={type} name="animalType" />
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</label>
			);
		});
	};

	// Populates dropdown with all the breeds of the select animal type
	renderBreeds = () => {
		const { selectedAnimalType } = this.state;
		if (selectedAnimalType) {
			const breedList = breeds[selectedAnimalType];
			return breedList.map(breed => {
				return (
					<option key={breed} value={breed}>
						{breed}
					</option>
				);
			});
		}
		return <option value={""} />;
	};

	onSubmit = formProps => {};

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="container is-fluid">
				<h4 className="title title-case is-4">Add A New Pet</h4>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<div className="field">
						<label className="label">Pet Type*</label>
						<div
							className="control"
							onChange={event => {
								this.setState({ selectedAnimalType: event.target.value });
							}}>
							{this.renderAnimalTypesFields()}
						</div>
					</div>
					<div className="field">
						<label className="label">Needs</label>
						<div className="field">
							<label className="checkbox">
								<input type="checkbox" />
								Foster Family
							</label>
						</div>
						<div className="field">
							<label className="checkbox">
								<input type="checkbox" />
								Adopter
							</label>
						</div>
					</div>
					<div className="field">
						<label className="label">Upload Photos</label>
						<div className="file is-boxed">
							<label className="file-label">
								<input className="file-input" type="file" name="petPhotos" />
								<span className="file-cta">
									<span className="file-icon">
										<i className="fas fa-upload" />
									</span>
									<span className="file-label">Choose a file…</span>
								</span>
							</label>
						</div>
					</div>
					<div className="field">
						<label className="label">Name</label>
						<div className="control">
							<input className="input" type="text" name="petName" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">Description</label>
						<div className="control">
							<textarea className="textarea" name="petDescription" placeholder="" />
						</div>
					</div>

					<div className="field">
						<label className="label">Breed</label>
						<div className="field has-addons">
							<div className="control">
								<div className={"select"}>
									<Field component={"select"} name={"breeds"}>
										<option value={""} />
										{this.renderBreeds()}
									</Field>
								</div>
							</div>
							<div className="control">
								<a className="button is-warning">Add Breed</a>
							</div>
						</div>
					</div>
					<div className="field">
						<label className="label">Age</label>
						<div className="field is-grouped">
							<div className="control">
								<input
									className="input"
									type="number"
									name="age_years"
									size="2"
									min={"0"}
									max={"20"}
								/>
							</div>
							<span className={"center-label-text-vertically"}>years&nbsp;&nbsp;&nbsp;</span>
							<div className="control">
								<input
									className="input"
									type="number"
									name="age_months"
									size="2"
									min={"0"}
									max={"11"}
								/>
							</div>
							<span className={"center-label-text-vertically"}>months&nbsp;&nbsp;&nbsp;</span>
						</div>
					</div>
					<div className="field">
						<label className="label">Gender</label>
						<div className="select">
							<select>
								<option />
								<option>Male</option>
								<option>Female</option>
							</select>
						</div>
					</div>
					<div className="field">
						<label className="label">Color</label>
						<div className="field has-addons">
							<div className="control">
								<input className="input" type="text" placeholder="Color" />
							</div>
							<div className="control">
								<a className="button is-warning">Add Color</a>
							</div>
						</div>
					</div>
					<div className="field">
						<label className="label">Weight</label>
						<div className="field is-grouped">
							<div className="control">
								<Field
									className="input"
									component={"input"}
									type="number"
									name="weight_lbs"
									size="3"
									min={"0"}
									max={"300"}
								/>
							</div>
							<span className={"center-label-text-vertically"}>lb&nbsp;&nbsp;&nbsp;</span>
							<div className="control">
								<Field
									className="input"
									component={"input"}
									type="number"
									name="weight_oz"
									min={"0"}
									max="15"
								/>
							</div>
							<span className={"center-label-text-vertically"}>oz&nbsp;&nbsp;&nbsp;</span>
						</div>
					</div>
					<div className="field">
						<label className="label">Features</label>
						<label className="checkbox">
							<input type="checkbox" />
							Housetrained
						</label>
						<label className="checkbox">
							<input type="checkbox" />
							Altered
						</label>
						<label className="checkbox">
							<input type="checkbox" />
							Microchipped
						</label>
						<label className="checkbox">
							<input type="checkbox" />
							Child Friendly
						</label>
						<label className="checkbox">
							<input type="checkbox" />
							Dog Friendly
						</label>
						<label className="checkbox">
							<input type="checkbox" />
							Cat Friendly
						</label>
					</div>
					<input className="button is-warning is-medium" type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default compose(
	connect(
		null,
		actions
	),
	reduxForm({ form: "addPet" })
)(AddPetForm);
