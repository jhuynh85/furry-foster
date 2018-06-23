import React from "react";
import "./RescueAppForm.css";

class RescueAppForm extends React.Component {
	render() {
		return (
			<div>
				<div className="evel title-case">Rescues sign up here</div>
				<form>
					<div class="field">
						<label class="label">Organization Name*</label>
						<div class="control">
							<input class="input" type="text" name="orgName" placeholder="" />
						</div>
					</div>
					<div class="field">
						<label class="label">Organization Email*</label>
						<div class="control">
							<input class="input" type="email" name="orgEmail" placeholder="" />
						</div>
					</div>
					<div class="field">
						<label class="label">Organization Phone Number*</label>
						<div class="control">
							<input class="input" type="tel" name="orgPhone" placeholder="" />
						</div>
					</div>
					<div class="field">
						<label class="label">Organization Address*</label>
						<div class="control">
							<input class="input" type="text" name="orgAddr1" placeholder="Address" />
						</div>
						<div class="control">
							<input class="input" type="text" name="orgAddr2" placeholder="Address 2" />
						</div>
						<div class="control">
							<input class="input" type="text" name="orgCity" placeholder="City" />
						</div>
						<div class="control">
							<input class="input" type="text" name="orgState" placeholder="State" />
						</div>
						<div class="control">
							<input class="input" type="number" name="orgZip" placeholder="Zip Code" />
						</div>
					</div>
					<div class="field">
						<label class="label">Organization Website*</label>
						<div class="control">
							<input class="input" type="url" placeholder="Text input" />
						</div>
					</div>
					<div class="field">
						<label class="label">501(c)3 EIN*</label>
						<div class="control">
							<input class="input" type="text" placeholder="Text input" />
						</div>
					</div>
					<div class="field">
						<label class="label">Account Email</label>
						<div class="control">
							<input class="input" type="email" placeholder="Text input" />
						</div>
					</div>
					<div class="field">
						<label class="label">Account Password</label>
						<div class="control">
							<input class="input" type="text" placeholder="Text input" />
						</div>
					</div>
					<div class="field">
						<label class="label">Confirm Password</label>
						<div class="control">
							<input class="input" type="text" placeholder="Text input" />
						</div>
					</div>
					<div class="field">
						<label class="checkbox">
							<input type="checkbox" />
							YES! My organization covers 100% foster care costs for food and vet
							care.
						</label>
					</div>
					<div class="field">
						<label class="checkbox">
							<input type="checkbox" />
							YES! I have read and agree to all <a href="#">terms and conditions</a>.
						</label>
					</div>
					<input class="button is-warning is-medium" type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default RescueAppForm;
