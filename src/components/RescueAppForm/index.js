import React from "react";
import "./RescueAppForm.css";

class RescueAppForm extends React.Component {
	render() {
		return (
			<div className="">
				<h4 className="title title-case is-4">Rescue sign-up</h4>
				<form>
					<div className="field">
						<label className="label">Organization Name*</label>
						<div className="control">
							<input className="input" type="text" name="orgName" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">Organization Email</label>
						<div className="control">
							<input className="input" type="email" name="orgEmail" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">Organization Phone Number</label>
						<div className="field is-grouped">
							<div className="control">
								<input
									className="input"
									type="number"
									name="orgPhone_1"
									placeholder=""
									size="3"
									maxlength="3"
								/>
							</div>
							<p>- </p>
							<div className="control">
								<input
									className="input"
									type="number"
									name="orgPhone_2"
									placeholder=""
									size="3"
									maxlength="3"
								/>
							</div>
							<p>- </p>
							<div className="control">
								<input
									className="input"
									type="number"
									name="orgPhone_3"
									placeholder=""
									size="3"
									maxlength="3"
								/>
							</div>
						</div>
					</div>
					<div className="field">
						<label className="label">Organization Address</label>
						<div className="control">
							<input className="input" type="text" name="orgAddr_1" placeholder="Address 1" />
						</div>
						<br />
						<div className="control">
							<input className="input" type="text" name="orgAddr_2" placeholder="Address 2" />
						</div>
						<br />
						<div className="field is-grouped">
							<div className="control">
								<input className="input" type="text" name="orgCity" placeholder="City" />
							</div>
							<div className="control">
								<input className="input" type="text" name="orgState" placeholder="State" />
							</div>
							<div className="control">
								<input
									className="input"
									type="number"
									name="orgZip"
									placeholder="Zip Code"
									size="5"
									maxlength="5"
								/>
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

export default RescueAppForm;
