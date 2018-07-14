import React, { Component } from "react";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../../actions";
import US_states from "../../assets/js/states";
import "./RescueAppForm.css";
import { toast } from "react-toastify";

class RescueAppForm extends Component {
	//----------- Field rendering functions ------------//
	// These functions are generally only used for fields that require input validation because it allows access
	// to the field.meta.error property from the <Field> component, which can be used to display any errors

	// Renders a generic form field with a label above it
	renderFieldWithLabel = field => {
		const { touched, error } = field.meta;
		const className = `input ${touched && error ? "is-danger" : ""}`;

		return (
			<div className="field">
				<label className="label">{field.label}</label>
				<div className="control">
					<input className={className} name={field.name} type={field.type} {...field.input} />
				</div>
				<span className={"form-error-message"}>{touched ? error : ""}</span>
			</div>
		);
	};

	renderCheckbox = field => {
		const { touched, error } = field.meta;

		return (
			<div className="field">
				<label className="checkbox">
					<input type={field.type} name={field.name} {...field.input} />
				</label>
				&nbsp; {field.children}
				<br />
				<span className={"form-error-message"}>{touched ? error : ""}</span>
			</div>
		);
	};

	// Renders the phone number field (with 3 sub fields)
	renderPhoneField = field => {
		const { touched, error } = field.meta;
		const className = `input ${touched && error ? "is-danger" : ""}`;

		return (
			<div className="field">
				<label className="label">Organization Phone Number</label>
				<div className="field is-grouped">
					<div className="control">
						<Field
							className={className}
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
							className={className}
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
							className={className}
							component={"input"}
							name={"phone3"}
							type={"text"}
							autoComplete={"none"}
							size={"4"}
							maxLength={"4"}
						/>
					</div>
				</div>
				<span className={"form-error-message"}>{touched ? error : ""}</span>
			</div>
		);
	};

	// Renders the organization address fields (address1, address2,
	// city, state, zip
	renderAddressFields = field => {
		return (
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
						<div className={"select"}>
							<Field component={"select"} name={"state"}>
								<option value={""}>State</option>
								{Object.keys(US_states).map(key => {
									return (
										<option key={key} value={key}>
											{key}
										</option>
									);
								})}
							</Field>
						</div>
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
				<span className={"form-error-message"}>{field.meta.touched ? field.meta.error : ""}</span>
			</div>
		);
	};

	// Renders the EIN field (with two sub fields)
	renderEINField = field => {
		const { touched, error } = field.meta;
		const className = `input ${touched && error ? "is-danger" : ""}`;

		return (
			<div className="field">
				<label className="label">501(c)(3) EIN*</label>
				<div className="field is-grouped">
					<div className="control">
						<Field
							className={className}
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
							className={className}
							component={"input"}
							name={"ein2"}
							type={"text"}
							autoComplete={"none"}
							size="7"
							maxLength="7"
						/>
					</div>
				</div>
				<span className={"form-error-message"}>{touched ? error : ""}</span>
			</div>
		);
	};

	onSubmit = formProps => {
		this.props.signup(
			{
				orgName: formProps.orgName,
				orgEmail: formProps.orgEmail,
				phone:
					formProps.phone1 && formProps.phone2 && formProps.phone3
						? `${formProps.phone1}-${formProps.phone2}-${formProps.phone3}`
						: undefined,
				email: formProps.email,
				password: formProps.password,
				address1: formProps.address1,
				address2: formProps.address2,
				city: formProps.city,
				state: formProps.state,
				zip: formProps.zip,
				websiteURL: formProps.websiteURL,
				ein: `${formProps.ein1}-${formProps.ein2}`,
				type: "rescue"
			},
			() => {
				toast.success("RESCUE ACCOUNT CREATED");
				// this.props.history.push("/redirect");
			}
		);
	};

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
					<Field name="orgAddress" component={this.renderAddressFields} />
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
					<Field name={"EINField"} component={this.renderEINField} />
					<Field
						label={"Account Email*"}
						className="input"
						component={this.renderFieldWithLabel}
						name={"email"}
						type={"email"}
						autoComplete={"none"}
					/>
					<Field
						label={"Account Password*"}
						className="input"
						component={this.renderFieldWithLabel}
						name={"password"}
						type={"password"}
						autoComplete={"none"}
					/>
					<Field
						label={"Confirm Password*"}
						className="input"
						component={this.renderFieldWithLabel}
						name={"passwordConfirm"}
						type={"password"}
						autoComplete={"none"}
					/>
					<Field name={"coverCosts"} type="checkbox" component={this.renderCheckbox}>
						<b>YES!</b> My organization covers 100% foster care costs for food and vet care.
					</Field>
					<Field name={"termsConditions"} type="checkbox" component={this.renderCheckbox}>
						<b>YES!</b> I have read and agree to all <a>terms and conditions</a>.
					</Field>
					<input className="button is-warning is-medium" type="submit" value="Submit" />
				</form>
				<span>{this.props.errorMessage}</span>
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
	if (
		(values.phone1 && (isNaN(values.phone1) || values.phone1.length !== 3)) ||
		(values.phone2 && (isNaN(values.phone2) || values.phone2.length !== 3)) ||
		(values.phone3 && (isNaN(values.phone3) || values.phone3.length !== 4))
	) {
		errors.orgPhone = "Please enter a valid phone number";
	}

	// Check for valid city
	if (values.city && !isNaN(values.city)) {
		errors.orgAddress = "Invalid city";
	}

	// Check for valid zip
	if (values.zip && (isNaN(values.zip) || values.zip.length !== 5)) {
		errors.orgAddress = "Invalid zip code";
	}

	// Check for EIN
	if (
		!values.ein1 ||
		!values.ein2 ||
		(values.ein1.length !== 2 || values.ein2.length !== 7) ||
		(isNaN(values.ein1) || isNaN(values.ein2))
	) {
		errors.EINField = "A valid EIN is required";
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
		if (values.passwordConfirm !== values.password) {
			errors.passwordConfirm = "Password and confirmation password does not match";
		}
	}

	// Make sure checkboxes are selected
	if (!values.coverCosts) {
		errors.coverCosts = "Please ensure you can cover 100% of foster care costs";
	}

	if (!values.termsConditions) {
		errors.termsConditions = "Please read and agree to the terms and conditions";
	}

	if (errors) console.log(errors);
	console.log(values);
	return errors;
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.errorMessage };
}

export default compose(
	connect(
		mapStateToProps,
		actions
	),
	reduxForm({ validate, form: "rescueApply" })
)(RescueAppForm);
