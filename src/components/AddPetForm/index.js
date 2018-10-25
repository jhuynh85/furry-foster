import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions";
import "./AddPetForm.css";
import formFields from "../HigherOrderComponents/formFields";
import axios from "axios";
import { toast } from "react-toastify";
import ImageUpload from "../ImageUpload";
import { uploadImage } from "../../utils/uploadImage";
import petAPI from "../../utils/petAPI";
import { Redirect } from "react-router-dom";

const breeds = require("../../assets/js/breeds");
const colors = require("../../assets/js/colors");
const animalTypes = require("../../assets/js/animalTypes").types;
const toastDuration = 5000; // Time in ms that toasts should stay up

class AddPetForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			petAdded: null,
			selectedAnimalType: null,
			currentlySelectedBreed: null,
			currentlySelectedColor: null,
			imageUploadQueue: [],
			breeds: [],
			colors: []
		};
	}

	// Callback to be passed to ImageUpload component so that it can add and remove selected images
	// from our image upload queue
	setImageUploadQueue = acceptedImages => {
		this.setState({ imageUploadQueue: acceptedImages });
	};

	// Renders radio button fields for all animals listed in the animalTypes.js file
	renderAnimalTypesFields = field => {
		const { touched, error } = field.meta;

		return (
			<div className="field">
				<label className="label">{field.label}</label>
				<div
					className="control"
					onChange={event => {
						this.setState({
							selectedAnimalType: event.target.value,
							currentlySelectedBreed: null,
							currentlySelectedColor: null,
							breeds: [],
							colors: []
						});
					}}>
					{animalTypes.map(type => {
						return (
							<label key={type + "Label"} className="radio">
								<Field type="radio" component={"input"} value={type} name="animalType" />
								&nbsp;
								{type.charAt(0).toUpperCase() + type.slice(1)} &nbsp;
							</label>
						);
					})}
				</div>
				<span className={"form-error-message"}>{touched ? error : ""}</span>
			</div>
		);
	};

	// Populates dropdown with all the breeds of the select animal type
	renderBreedDropdown = () => {
		const { selectedAnimalType } = this.state;
		if (selectedAnimalType) {
			const breedList = breeds[selectedAnimalType];
			return this.renderDropdownOptions(breedList);
		}
		return <option value={""} />;
	};

	// Populates dropdown with all the colors of the select animal type
	renderColorDropdown = () => {
		const { selectedAnimalType } = this.state;
		if (selectedAnimalType) {
			const colorList = colors[selectedAnimalType];
			return this.renderDropdownOptions(colorList);
		}
		return <option value={""} />;
	};

	// Renders dropdown options from given list
	renderDropdownOptions = list => {
		return list.map(item => {
			return (
				<option key={item} value={item}>
					{item}
				</option>
			);
		});
	};

	// Sets the current breed when user selects from dropdown
	onBreedChange = event => {
		this.setState({ currentlySelectedBreed: event.target.value });
	};

	// Sets the current color when user selects from dropdown
	onColorChange = event => {
		this.setState({ currentlySelectedColor: event.target.value });
	};

	// Adds breed currently selected in the dropdown to the breed array if it isn't already in there
	addBreed = event => {
		const { breeds, currentlySelectedBreed } = this.state;
		if (currentlySelectedBreed && breeds.indexOf(currentlySelectedBreed) === -1) {
			this.setState({ breeds: [...breeds, currentlySelectedBreed] });
		}
	};

	// Adds color currently selected in the dropdown to the color array if it isn't already in there
	addColor = event => {
		const { colors, currentlySelectedColor } = this.state;
		if (currentlySelectedColor && colors.indexOf(currentlySelectedColor) === -1) {
			this.setState({ colors: [...colors, currentlySelectedColor] });
		}
	};

	// Removes the selected breed from the breeds array
	removeBreed = breedToRemove => {
		this.setState({
			breeds: this.state.breeds.filter(breed => breed !== breedToRemove)
		});
	};

	// Removes the selected color from the colors array
	removeColor = colorToRemove => {
		this.setState({
			colors: this.state.colors.filter(color => color !== colorToRemove)
		});
	};

	onSubmit = async formProps => {
		const {
			petName,
			animalType,
			petDescription,
			gender,
			weight_lbs,
			weight_oz,
			age_years,
			age_months
		} = formProps;

		const availability = [];
		if (formProps.needsFoster) {
			availability.push("Foster");
		}
		if (formProps.needsAdopter) {
			availability.push("Adopter");
		}

		const features = [];
		if (formProps.isAltered) {
			features.push("Altered");
		}
		if (formProps.isHouseTrained) {
			features.push("House-trained");
		}
		if (formProps.isMicrochipped) {
			features.push("Microchipped");
		}
		if (formProps.isChildFriendly) {
			features.push("Child-friendly");
		}
		if (formProps.isDogFriendly) {
			features.push("Dog-friendly");
		}
		if (formProps.isCatFriendly) {
			features.push("Cat-friendly");
		}

		if (localStorage.getItem("user")) {
			const loggedInRescue = JSON.parse(localStorage.getItem("user"));

			// Make sure we only submit the form if the logged in user is a Rescue
			if (loggedInRescue.userType !== "rescue") {
				console.log(
					'ERROR: Invalid userType, expected "rescue" but got "' + loggedInRescue.userType + '"'
				);
				toast.error("Sign in as a rescue to add pet");
			} else {
				// console.log("formProps: ", formProps);
				const newPet = {
					name: petName,
					type: animalType,
					description: petDescription,
					gender,
					weightInOz: (parseInt(weight_lbs, 10) || 0) * 16 + parseInt(weight_oz, 10) || undefined,
					ageInMonths: (parseInt(age_years, 10) || 0) * 12 + parseInt(age_months, 10) || undefined,
					breed: this.state.breeds,
					color: this.state.colors,
					features,
					availability,
					rescue: loggedInRescue._id
				};
				console.log("Submitting new pet: ", newPet);
				// Attempt post request to add new pet
				try {
					// Set authorization header because /addpet route is protected
					const header = { authorization: localStorage.getItem("token") };
					let response = await axios.post("/api/add/pet", newPet, { headers: header });
					console.log("/addpet response: ", response);
					const petID = response.data._id;

					// Upload images
					let petImageURLs = [];
					for (let i = 0; i < this.state.imageUploadQueue.length; i++) {
						let image = this.state.imageUploadQueue[i];
						let uploadResponse = await uploadImage({
							type: "pet",
							filename: image.name,
							data: image.data,
							id: petID
						});
						toast.info(image.name + " uploaded", { autoClose: toastDuration });
						// console.log("image url: ", uploadResponse);
						petImageURLs.push(uploadResponse.data);
					}

					// TODO: MAKE SURE IMAGES ARE 2MB OR LESS!!!

					// Update pet with image urls
					console.log("petImageURLs: ", petImageURLs);
					let imageUploadResponse = await petAPI.addPetImage(petID, petImageURLs, {
						headers: header
					});
					console.log("imageUploadResponse: ", imageUploadResponse);

					toast.success("New pet added", { autoClose: toastDuration });
					console.log("New pet added: ", response.data);
					this.setState({ petAdded: response.data });
				} catch (e) {
					console.log(e);
					console.log("API error: ", e.response);
				}
			}
		} else {
			console.log("ERROR: Must be signed in as a rescue to add a pet");
			toast.error("Sign in as a rescue to add pet");
		}
	};

	render() {
		const { handleSubmit, submitting } = this.props;

		if (this.state.petAdded) {
			return <Redirect to={`/pets/${this.state.petAdded._id}`} />;
		}

		return (
			<div className="container is-fluid">
				<h4 className="title title-case is-4">Add A New Pet</h4>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<Field
						className={"input"}
						component={this.renderAnimalTypesFields}
						label={"Pet Type*"}
						name={"type"}
					/>
					<div className="field">
						<label className="label">Needs</label>
						<div className={"control"}>
							<Field name={"needsFoster"} type="checkbox" component={this.props.renderCheckbox}>
								Foster
							</Field>
						</div>
						<div className={"control"}>
							<Field name={"needsAdopter"} type="checkbox" component={this.props.renderCheckbox}>
								Adopter
							</Field>
						</div>
					</div>
					<Field
						className={"input"}
						component={this.props.renderFieldWithLabel}
						label={"Name*"}
						type={"text"}
						name={"petName"}
					/>
					<div className="field">
						<label className="label">Description</label>
						<div className="control">
							<Field className="textarea" component={"textarea"} name="petDescription" />
						</div>
					</div>

					<div className="field">
						<label className="label">Upload Photos</label>
						<ImageUpload setImageUploadQueue={this.setImageUploadQueue} />
					</div>

					<div className="field">
						<label className="label">Breed</label>
						<div className="field has-addons">
							<div className="control">
								<div className={"select"} onChange={this.onBreedChange}>
									<Field component={"select"} name={"breeds"}>
										<option value={""} />
										{this.renderBreedDropdown()}
									</Field>
								</div>
							</div>
							<div className="control">
								<a className="button is-warning" onClick={this.addBreed}>
									Add Breed
								</a>
							</div>
						</div>
					</div>
					<div className={"tags"}>
						{this.state.breeds.map(breed => {
							return (
								<span key={breed} className={"tag is-warning"}>
									<strong>{breed}</strong>
									<button
										className="delete is-small"
										onClick={() => {
											this.removeBreed(breed);
										}}
									/>
								</span>
							);
						})}
					</div>
					<div className="field">
						<label className="label">Age</label>
						<div className="field is-grouped">
							<div className="control">
								<Field
									className="input"
									component={"input"}
									type="number"
									name="age_years"
									size="2"
									min={"0"}
									max={"20"}
								/>
							</div>
							<span className={"center-label-text-vertically"}>years&nbsp;&nbsp;&nbsp;</span>
							<div className="control">
								<Field
									className="input"
									component={"input"}
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
						<div className="control">
							<label className="radio">
								<Field type="radio" component={"input"} value="male" name="gender" />
								&nbsp;Male &nbsp;
							</label>
							<label className="radio">
								<Field type="radio" component={"input"} value="female" name="gender" />
								&nbsp;Female &nbsp;
							</label>
						</div>
					</div>
					<div className="field">
						<label className="label">Color</label>
						<div className="field has-addons">
							<div className="control">
								<div className={"select"} onChange={this.onColorChange}>
									<Field component={"select"} name={"colors"}>
										<option value={""} />
										{this.renderColorDropdown()}
									</Field>
								</div>
							</div>
							<div className="control">
								<a className="button is-warning" onClick={this.addColor}>
									Add Color
								</a>
							</div>
						</div>
					</div>
					<div className={"tags"}>
						{this.state.colors.map(color => {
							return (
								<span key={color} className={"tag is-warning"}>
									<strong>{color}</strong>
									<button
										className="delete is-small"
										onClick={() => {
											this.removeColor(color);
										}}
									/>
								</span>
							);
						})}
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
									max={"200"}
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
						<div className={"control"}>
							<Field name={"isHouseTrained"} type="checkbox" component={this.props.renderCheckbox}>
								House-trained
							</Field>
						</div>
						<div className={"control"}>
							<Field name={"isAltered"} type="checkbox" component={this.props.renderCheckbox}>
								Altered
							</Field>
						</div>

						<div className={"control"}>
							<Field name={"isMicrochipped"} type="checkbox" component={this.props.renderCheckbox}>
								Microchipped
							</Field>
						</div>
						<div className={"control"}>
							<Field name={"isChildFriendly"} type="checkbox" component={this.props.renderCheckbox}>
								Child-friendly
							</Field>
						</div>
						<div className={"control"}>
							<Field name={"isDogFriendly"} type="checkbox" component={this.props.renderCheckbox}>
								Dog-friendly
							</Field>
						</div>
						<div className={"control"}>
							<Field name={"isCatFriendly"} type="checkbox" component={this.props.renderCheckbox}>
								Cat-friendly
							</Field>
						</div>
					</div>
					<button
						className={`button is-warning is-medium ${submitting ? "is-loading" : ""}`}
						type="submit"
						value={"Submit"}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};
	// Check for name
	if (!values.petName) {
		errors.petName = "A pet name is required";
	}

	// Check that pet type is selected
	if (!values.animalType) {
		errors.type = "A pet type is required";
	}
	return errors;
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.errorMessage };
}

export default compose(
	formFields,
	connect(
		mapStateToProps,
		actions
	),
	reduxForm({ validate, form: "addPet" })
)(AddPetForm);
