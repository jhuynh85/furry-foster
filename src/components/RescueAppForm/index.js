import React from "react";
import "./RescueAppForm.css";

class RescueAppForm extends React.Component {
	render() {
		return (
			<div className="container is-fluid">
				<br />
				<h4 className="title title-case is-4">Rescue sign-up</h4>
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
							<input className="input" type="url" />
						</div>
					</div>
					<div className="field">
						<label className="label">501(c)3 EIN*</label>
						<div className="control">
							<input className="input" type="text" />
						</div>
					</div>
					<div className="field">
						<label className="label">Account Email</label>
						<div className="control">
							<input className="input" type="email" />
						</div>
					</div>
					<div className="field">
						<label className="label">Account Password</label>
						<div className="control">
							<input className="input" type="text" />
						</div>
					</div>
					<div className="field">
						<label className="label">Confirm Password</label>
						<div className="control">
							<input className="input" type="text" />
						</div>
					</div>
					<div className="field">
						<label className="checkbox">
							<input type="checkbox" />&nbsp; YES! My organization covers 100% foster care costs for
							food and vet care.
						</label>
					</div>
					<div className="field">
						<label className="checkbox">
							<input type="checkbox" />
							&nbsp; YES! I have read and agree to all <a>terms and conditions</a>.
						</label>
					</div>
					<input className="button is-warning is-medium" type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default RescueAppForm;
