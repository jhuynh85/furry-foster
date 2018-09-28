import React, { Component } from "react";
import US_states from "../../assets/js/states";

class ProfileInfo extends Component {
	render() {
		return (
			<div className="content">
				<h1>Profile</h1>
				<p>Your profile information is public.</p>
				<section>
					<form>
						<div className="field">
							<label className="label">Organization Name*</label>
							<div className="control">
								<input className="input" name="orgName" type="text" value={this.props.orgName} />
							</div>
						</div>
						<div className="field">
							<label className="label">Organization Email*</label>
							<div className="control">
								<input className="input" name="orgEmail" type="email" value={this.props.orgEmail} />
							</div>
						</div>
						<div className="field">
							<label className="label">Organization Phone Number*</label>
							<div className="field is-grouped">
								<div className="control">
									<input
										className="input"
										name="phone1"
										type="text"
										autoComplete="none"
										size="3"
										maxLength="3"
										placeholder={this.props.phone}
									/>
								</div>
								<span className="center-label-text-vertically">-&nbsp;&nbsp;&nbsp;</span>
								<div className="control">
									<input
										className="input"
										name="phone2"
										type="text"
										autoComplete="none"
										size="3"
										maxLength="3"
										value={this.props.phone2}
									/>
								</div>
								<span className="center-label-text-vertically">-&nbsp;&nbsp;&nbsp;</span>
								<div className="control">
									<input
										className="input"
										name="phone3"
										type="text"
										autoComplete="none"
										size="3"
										maxLength="3"
										value={this.props.phone3}
									/>
								</div>
							</div>
						</div>
						<div className="field">
							<label className="label">Organization Address*</label>
							<div className="control">
								<input className="input" type="text" value={this.props.address1} />
							</div>
						</div>
						<div className="field">
							<div className="control">
								<input className="input" type="text" value={this.props.address2} />
							</div>
						</div>
						<div className="field is-grouped">
							<div className="field">
								<label className="label">City*</label>
								<div className="control">
									<input className="input" type="text" value={this.props.city} />
								</div>
							</div>
							<div className="field">
								<label className="label">State*</label>
								<div className="control select">
									<input className="input" type="text" value={this.props.state} />
								</div>
							</div>
							<div className="field">
								<label className="label">Zip Code*</label>
								<div className="control">
									<input className="input" type="text" value={this.props.zip} />
								</div>
							</div>
						</div>
						<div className="field">
							<label className="label">Organization Website*</label>
							<div className="control">
								<input className="input" type="text" value={this.props.websiteURL} />
							</div>
						</div>
						<div className="field">
							<label className="label">501(c)3 EIN*</label>
							<div className="field is-grouped">
								<div className="control">
									<input
										name="ein1"
										className="input "
										type="text"
										autocomplete="none"
										size="2"
										maxlength="2"
										value=""
									/>
								</div>
								<span className="center-label-text-vertically">-&nbsp;&nbsp;&nbsp;</span>
								<div className="control">
									<input
										name="ein2"
										className="input "
										type="text"
										autocomplete="none"
										size="7"
										maxlength="7"
										value=""
									/>
								</div>
							</div>
						</div>

						<div>
							<a className="button is-warning">
								<strong>Update</strong>
							</a>
						</div>
					</form>
				</section>
			</div>
		);
	}
}

export default ProfileInfo;
