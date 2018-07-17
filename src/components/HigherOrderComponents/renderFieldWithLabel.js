import React, { Component } from "react";

// This higher order component (HOC) takes a regular component and gives it a
// renderFieldWithLabel function that can be used to render a Field component with input and label
export default ChildComponent => {
	class ComposedComponent extends Component {
		renderFieldWithLabel = field => {
			const { touched, error } = field.meta;
			const className = `input ${touched && error ? "is-danger" : ""}`;

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
						/>
					</div>
					<span className={"form-error-message"}>{touched ? error : ""}</span>
				</div>
			);
		};

		render() {
			return <ChildComponent renderFieldWithLabel={this.renderFieldWithLabel} />;
		}
	}

	return ComposedComponent;
};