import React from "react";
import "./NewPetForm.css";

class NewPetForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			step: 1
		};
	}

	saveAndContinue(e) {
		e.preventDefault();

		// Get values via this.refs
		var newPet = {
			name: this.name.petName.getDOMNode().value
		};

		console.log(newPet);

		this.props.nextStep();
	}

	nextStep() {
		this.setState({
			step: this.state.step + 1
		});

		console.log(this.state.step);
	}

	previousStep() {
		this.setState({
			step: this.state.step - 1
		});
		console.log(this.state.step);
	}

	renderSwitch(props) {
		switch (this.state.step) {
			case 1:
				return (
					<div>
						<form>
							<label>
								Name:
								<input type="text" name="petName" />
							</label>
							<button onClick={this.saveAndContinue}>Save and Continue</button>
						</form>
						<button onClick={this.nextStep}>NEXT</button>
					</div>
				);
			case 2:
				return "Case 2";
			case 3:
				return "Case 3";
			case 4:
				return "Case 4";
			default:
				return "Default";
		}
	}

	render() {
		let newPet = {
			type: null,
			needs: [],
			photos: [],
			name: null,
			description: null,
			age: null,
			breeds: null,
			gender: null,
			colors: [],
			weight: null,
			features: []
		};

		return <div className="container is-fluid">{this.renderSwitch(this.state.step)}</div>;
	}
}

export default NewPetForm;
