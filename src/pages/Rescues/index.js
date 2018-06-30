import React from "react";
import "./Rescues.css";
import RescueAppForm from "../../components/RescueAppForm";

class Rescues extends React.Component {
	componentDidMount() {
		document.title = "Rescues";
	}

	render() {
		return <RescueAppForm />;
	}
}

export default Rescues;
