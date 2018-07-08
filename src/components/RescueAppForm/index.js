import React, { Component } from "react";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./RescueAppForm.css";

class RescueAppForm extends React.Component {
	//----------- Field rendering functions ------------//
	// These functions are generally only used for fields that require input validation because it allows access
	// to the field.meta.error property from the <Field> component, which can be used to display any errors

	// Renders a generic form field with a label above it
	renderFieldWithLabel = field => {
		return (
			<div className="field">
				<label className="label">{field.label}</label>
				<div className="control">
					<input className="input" name={field.name} type={field.type} {...field.input} />
				</div>
				<span className={"form-error-message"}>{field.meta.error}</span>
			</div>
		);
	};

	// Renders the phone number field (with 3 sub fields)
	renderPhoneField = field => {
		return (
			<div className="field">
				<label className="label">Organization Phone Number</label>
				<div className="field is-grouped">
					<div className="control">
						<Field
							className="input"
							component={"input"}
							name={"phone1"}
							type={"text"}
							autoComplete={"none"}
							size={"3"}
							maxLength={"3"}
						/>
					</div>
					<span className={"center-label-text-vertically"}>-&nbsp;&nbsp;&nbsp;</span>
					<div className="control">
						<Field
							className="input"
							component={"input"}
							name={"phone2"}
							type={"text"}
							autoComplete={"none"}
							size={"3"}
							maxLength={"3"}
						/>
					</div>
					<span className={"center-label-text-vertically"}>-&nbsp;&nbsp;&nbsp;</span>
					<div className="control">
						<Field
							className="input"
							component={"input"}
							name={"phone3"}
							type={"text"}
							autoComplete={"none"}
							size={"4"}
							maxLength={"4"}
						/>
					</div>
				</div>
				<span className={"form-error-message"}>{field.meta.error}</span>
			</div>
		);
	};

	// Renders the EIN field (with two sub fields)
	renderEINField = field => {};

	onSubmit = formProps => {};

	render() {
		const { handleSubmit } = this.props;

		return (
			<div className="">
				<h4 className="title title-case is-4">Rescue sign-up</h4>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<Field
						label={"Organization Name*"}
						className="input"
						component={this.renderFieldWithLabel}
						name={"orgName"}
						type={"text"}
						autoComplete={"none"}
					/>
					<div className="field">
						<label className="label">Organization Email</label>
						<div className="control">
							<Field
								className="input"
								component={"input"}
								name={"orgEmail"}
								type={"email"}
								autoComplete={"none"}
							/>
						</div>
					</div>
					<Field name="orgPhone" component={this.renderPhoneField} />
					<div className="field">
						<label className="label">Organization Address</label>
						<div className="control">
							<Field
								className="input"
								component={"input"}
								name={"address1"}
								type={"text"}
								autoComplete={"none"}
								placeholder={"Address 1"}
							/>
						</div>
						<br />
						<div className="control">
							<Field
								className="input"
								component={"input"}
								name={"address2"}
								type={"text"}
								autoComplete={"none"}
								placeholder={"Address 2"}
							/>
						</div>
						<br />
						<div className="field is-grouped">
							<div className="control">
								<Field
									className="input"
									component={"input"}
									name={"city"}
									type={"text"}
									autoComplete={"none"}
									placeholder={"City"}
								/>
							</div>
							<div className="control">
								<Field
									className="input"
									component={"input"}
									name={"state"}
									type={"text"}
									autoComplete={"none"}
									placeholder={"State"}
								/>
							</div>
							<div className="control">
								<Field
									className="input"
									component={"input"}
									name={"zip"}
									type={"text"}
									autoComplete={"none"}
									placeholder={"Zip Code"}
									size="5"
									maxLength="5"
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
								<Field
									className="input"
									component={"input"}
									name={"websiteURL"}
									type={"text"}
									autoComplete={"none"}
									placeholder={"www.yourrescue.com"}
								/>
							</p>
						</div>
					</div>
					<div className="field">
						<label className="label">501(c)(3) EIN*</label>
						<div className="field is-grouped">
							<div className="control">
								<Field
									className="input"
									component={"input"}
									name={"ein1"}
									type={"text"}
									autoComplete={"none"}
									size="2"
									maxLength="2"
								/>
							</div>
							<span className={"center-label-text-vertically"}>-&nbsp;&nbsp;&nbsp;</span>
							<div className="control">
								<Field
									className="input"
									component={"input"}
									name={"ein2"}
									type={"text"}
									autoComplete={"none"}
									size="7"
									maxLength="7"
								/>
							</div>
						</div>
					</div>
					<div className="field">
						<label className="label">Account Email*</label>
						<div className="control">
							<Field
								className="input"
								component={"input"}
								name={"email"}
								type={"email"}
								autoComplete={"none"}
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Account Password*</label>
						<div className="control">
							<Field
								className="input"
								component={"input"}
								name={"password"}
								type={"password"}
								autoComplete={"none"}
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Confirm Password*</label>
						<div className="control">
							<Field
								className="input"
								component={"input"}
								name={"passwordConfirm"}
								type={"password"}
								autoComplete={"none"}
							/>
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

// Validates input fields
function validate(values) {
	const errors = {};

	// Check for org name
	if (!values.orgName) {
		errors.orgName = "Organization name is required";
	}

	// Check for valid phone number
	if (values.phone1 || values.phone2 || values.phone3) {
		if (isNaN(values.phone1) || isNaN(values.phone2) || isNaN(values.phone3)) {
			errors.orgPhone = "Please enter a valid phone number";
		}
	}

	// Check for valid zip

	// Check for EIN
	if (!values.EIN) {
		errors.ein1 = "An EIN is required";
	}

	// Check for email
	if (!values.email) {
		errors.email = "An email address is required";
	}

	// Check for password
	if (!values.password) {
		errors.password = "A password is required";
	} else {
		// Check password and passwordConfirm fields match
		if (values.password !== values.passwordConfirm) {
			errors.passwordConfirm = "Password and confirmation password does not match";
		}
	}

	console.log(errors);
	return errors;
}

export default compose(
	connect(
		null,
		actions
	),
	reduxForm({ validate, form: "rescueApply" })
)(RescueAppForm);
