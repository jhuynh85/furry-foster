import React from "react";
import "./AddPetForm.css";

class AddPetForm extends React.Component {
	render() {
		return (
			<div className="container is-fluid">
				<h4 className="title title-case is-4">Add A New Pet</h4>
				<form>
					<div className="field">
						<label className="label">Pet Type*</label>
						<div className="control">
							<label className="radio">
								<input type="radio" name="answer" />
								Dog
							</label>
							<label className="radio">
								<input type="radio" name="answer" />
								Cat
							</label>
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
						<div class="file is-boxed">
							<label class="file-label">
								<input class="file-input" type="file" name="petPhotos" />
								<span class="file-cta">
									<span class="file-icon">
										<i class="fas fa-upload" />
									</span>
									<span class="file-label">Choose a file…</span>
								</span>
							</label>
						</div>
					</div>
					<div className="field">
						<label className="label">Name</label>
						<div className="control">
							<input className="input" type="text" name="petDescription" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">Description</label>
						<div className="control">
							<textarea className="textarea" type="email" name="petName" placeholder="" />
						</div>
					</div>

					<div className="field">
						<label className="label">Breed</label>
						<div class="field has-addons">
							<div class="control">
								<input class="input" type="text" placeholder="Breed" />
							</div>
							<div class="control">
								<a class="button is-warning">Add Breed</a>
							</div>
						</div>
					</div>
					<div className="field">
						<label className="label">Age</label>
						<div className="field is-grouped">
							<div className="control">
								<input
									className="input"
									type="text"
									name="age_months"
									placeholder=""
									size="2"
									maxlength="2"
								/>
							</div>
							<span className={"center-label-text-vertically"}>months&nbsp;&nbsp;&nbsp;</span>
							<div className="control">
								<input
									className="input"
									type="text"
									name="age_years"
									placeholder=""
									size="2"
									maxlength="2"
								/>
							</div>
							<span className={"center-label-text-vertically"}>years&nbsp;&nbsp;&nbsp;</span>
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
								<input
									className="input"
									type="text"
									name="weight_lbs"
									placeholder=""
									size="3"
									maxlength="3"
								/>
							</div>
							<span className={"center-label-text-vertically"}>lb&nbsp;&nbsp;&nbsp;</span>
							<div className="control">
								<input
									className="input"
									type="text"
									name="weight_oz"
									placeholder=""
									size="2"
									maxlength="2"
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

export default AddPetForm;
