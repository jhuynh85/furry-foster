import React from "react";
import "./RescueAppForm.css";

class RescueAppForm extends React.Component {
	render() {
		return (
			<div className="container is-fluid">
				<br />
				<div className="title-case">Rescues sign up here</div>
				<form>
					<div className="field">
						<label className="label">Organization Name*</label>
						<div className="control">
							<input className="input" type="text" name="orgName" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">Organization Email*</label>
						<div className="control">
							<input className="input" type="email" name="orgEmail" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">Organization Phone Number*</label>
						<div className="control">
							<input className="input" type="tel" name="orgPhone" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">Organization Address*</label>
						<div className="control">
							<input className="input" type="text" name="orgAddr1" placeholder="Address" />
						</div>
						<div className="control">
							<input className="input" type="text" name="orgAddr2" placeholder="Address 2" />
						</div>
						<div className="control">
							<input className="input" type="text" name="orgCity" placeholder="City" />
						</div>
						<div className="control">
							<input className="input" type="text" name="orgState" placeholder="State" />
						</div>
						<div className="control">
							<input className="input" type="number" name="orgZip" placeholder="Zip Code" />
						</div>
					</div>
					<div className="field">
						<label className="label">Organization Website*</label>
						<div className="control">
							<input className="input" type="url" placeholder="Text input" />
						</div>
					</div>
					<div className="field">
						<label className="label">501(c)3 EIN*</label>
						<div className="control">
							<input className="input" type="text" placeholder="Text input" />
						</div>
					</div>
					<div className="field">
						<label className="label">Account Email</label>
						<div className="control">
							<input className="input" type="email" placeholder="Text input" />
						</div>
					</div>
					<div className="field">
						<label className="label">Account Password</label>
						<div className="control">
							<input className="input" type="text" placeholder="Text input" />
						</div>
					</div>
					<div className="field">
						<label className="label">Confirm Password</label>
						<div className="control">
							<input className="input" type="text" placeholder="Text input" />
						</div>
					</div>
					<div className="field">
						<label className="checkbox">
							<input type="checkbox" />
							YES! My organization covers 100% foster care costs for food and vet care.
						</label>
					</div>
					<div className="field">
						<label className="checkbox">
							<input type="checkbox" />
							YES! I have read and agree to all <a href="#">terms and conditions</a>.
						</label>
					</div>
					<input className="button is-warning is-medium" type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default RescueAppForm;
