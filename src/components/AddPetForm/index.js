import React from "react";
import "./AddPetForm.css";

class AddPetForm extends React.Component {
	render() {
		return (
			<div className="container is-fluid">
				<br />
				<h4 className="title title-case is-4">Add A New Pet</h4>
				<form>
					<div className="field">
						<label className="label">Pet Type*</label>
						<div className="control">
							<input className="input" type="text" name="petType" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">Pet Name</label>
						<div className="control">
							<input className="input" type="email" name="petName" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">Upload Pet Photos</label>
						<div class="file is-boxed">
							<label class="file-label">
								<input class="file-input" type="file" name="resume" />
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
						<label className="label">Pet Breed</label>
						<div class="field has-addons">
							<div class="control">
								<input class="input" type="text" placeholder="Breed" />
							</div>
							<div class="control">
								<a class="button is-info">Add Breed</a>
							</div>
						</div>
					</div>
					<div className="field">
						<label className="label">Organization Website</label>
						<div className="field has-addons">
							<p className="control">
								<a className="button is-static">
									<b>http://</b>
								</a>
							</p>
							<p className="control is-expanded">
								<input className="input" type="text" placeholder="www.yourrescue.com" />
							</p>
						</div>
					</div>
					<div className="field">
						<label className="label">501(c)3 EIN*</label>
						<div className="field is-grouped">
							<div className="control">
								<input
									className="input"
									type="number"
									name="ein_1"
									placeholder=""
									size="2"
									maxlength="2"
								/>
							</div>
							<p>- </p>
							<div className="control">
								<input
									className="input"
									type="number"
									name="ein_2"
									placeholder=""
									size="7"
									maxlength="7"
								/>
							</div>
						</div>
					</div>
					<div className="field">
						<label className="label">Account Email*</label>
						<div className="control">
							<input className="input" type="email" />
						</div>
					</div>
					<div className="field">
						<label className="label">Account Password*</label>
						<div className="control">
							<input className="input" type="text" />
						</div>
					</div>
					<div className="field">
						<label className="label">Confirm Password*</label>
						<div className="control">
							<input className="input" type="text" />
						</div>
					</div>
					<div className="field">
						<label className="checkbox">
							<input type="checkbox" />
							&nbsp; <b>YES!</b> My organization covers 100% foster care costs for food and vet
							care.
						</label>
					</div>
					<div className="field">
						<label className="checkbox">
							<input type="checkbox" />
							&nbsp; <b>YES!</b> I have read and agree to all <a>terms and conditions</a>.
						</label>
					</div>
					<input className="button is-warning is-medium" type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default AddPetForm;
