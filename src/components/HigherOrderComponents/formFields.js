import React, { Component } from "react";
import { Field } from "redux-form";
import US_states from "../../assets/js/states";

// This higher order component (HOC) takes a regular component and gives it a
// renderFieldWithLabel function that can be used to render a Field component with input and label
export default ChildComponent => {
	class ComposedComponent extends Component {
		// Renders a Field that has a checkbox
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

		// Renders a Field with a label
		renderFieldWithLabel = field => {
			const { touched, error } = field.meta;
			const className = `input ${touched && error ? "is-danger" : ""}`;

			// Version with icon
			if (field.icon) {
				return (
					<div className="field">
						<label className="label">{field.label}</label>
						<div className="control has-icons-left">
							<input
								className={className}
								name={field.name}
								type={field.type}
								placeholder={field.placeholder}
								{...field.input}
								autoFocus={field.autoFocus}
								autoComplete={field.autoComplete}
							/>
							<span className="icon is-small is-left">
								<i className={"fa fa-" + field.icon} />
							</span>
						</div>
						<span className={"form-error-message"}>{touched ? error : ""}</span>
					</div>
				);
			} else {
				// Version without icon
				return (
					<div className="field">
						<label className="label">{field.label}</label>
						<div className="control">
							<input
								className={className}
								name={field.name}
								type={field.type}
								placeholder={field.placeholder}
								{...field.input}
								autoFocus={field.autoFocus}
								autoComplete={field.autoComplete}
							/>
						</div>
						<span className={"form-error-message"}>{touched ? error : ""}</span>
					</div>
				);
			}
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
					<label className="label">Organization Address*</label>
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

		render() {
			return (
				<ChildComponent
					{...this.props}
					renderCheckbox={this.renderCheckbox}
					renderFieldWithLabel={this.renderFieldWithLabel}
					renderPhoneField={this.renderPhoneField}
					renderAddressFields={this.renderAddressFields}
					renderEINField={this.renderEINField}
				/>
			);
		}
	}

	return ComposedComponent;
};
