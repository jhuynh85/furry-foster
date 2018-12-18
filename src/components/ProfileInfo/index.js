import React, { Component } from "react";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import formFields from "../HigherOrderComponents/formFields";
import * as actions from "../../actions";

class ProfileInfo extends Component {
	onSubmit = formProps => {
		console.log("formProps: ", formProps);

		const updatedUser = {
			orgName: formProps.orgName,
			orgEmail: formProps.orgEmail,
			phone:
				formProps.phone1 && formProps.phone2 && formProps.phone3
					? `${formProps.phone1}-${formProps.phone2}-${formProps.phone3}`
					: undefined,
			address1: formProps.address1,
			address2: formProps.address2,
			city: formProps.city,
			state: formProps.state,
			zip: formProps.zip,
			websiteURL: formProps.websiteURL,
			ein: `${formProps.ein1}-${formProps.ein2}`
		};

		const userID = formProps._id;
		this.props.updateUser(userID, updatedUser, () => {
			toast.success("PROFILE UPDATED");
			console.log("Successfully updated user");
		});
	};

	render() {
		const { handleSubmit, submitting } = this.props;

		return (
			<div className="content">
				<h1>Profile</h1>
				<p>Your profile information is public.</p>
				<section>
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<Field
							label={"Organization Name*"}
							className="input"
							component={this.props.renderFieldWithLabel}
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
						<Field name="orgPhone" component={this.props.renderPhoneField} />
						<Field name="orgAddress" component={this.props.renderAddressFields} />
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
						<Field name={"EINField"} component={this.props.renderEINField} />

						<button
							className={`button is-warning is-medium ${submitting ? "is-loading" : ""}`}
							type="submit"
							value="Update">
							Update
						</button>
					</form>
				</section>
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

	// if (errors) console.log(errors);
	// console.log(values);
	return errors;
}

// initialValues: initial values for the form, loaded from props.loggedInUser
// errorMessage: error message returned if there is a submission error
function mapStateToProps(global_state, props) {
	const ein = props.loggedInUser.ein.split("-");
	const phone = props.loggedInUser.phone.split("-");
	const {
		_id,
		orgName,
		orgEmail,
		address1,
		address2,
		city,
		state,
		zip,
		websiteURL
	} = props.loggedInUser;
	return {
		errorMessage: global_state.auth.errorMessage,
		initialValues: {
			_id,
			orgName,
			orgEmail,
			address1,
			address2,
			city,
			state,
			zip,
			websiteURL,
			ein1: ein[0],
			ein2: ein[1],
			phone1: phone[0],
			phone2: phone[1],
			phone3: phone[2]
		}
	};
}

export default compose(
	formFields,
	connect(
		mapStateToProps,
		actions
	),
	reduxForm({ validate, form: "userUpdate" })
)(ProfileInfo);
