import React from "react";
import "./RescuesApply.css";
import RescueAppForm from "../../components/RescueAppForm";

class RescuesApply extends React.Component {
	componentDidMount() {
		document.title = "Rescues";
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="columns">
						<div className="column">
							<section className="section content">
								<h1 className="title is-1">Apply for Partnership</h1>
								<div>
									<RescueAppForm />
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RescuesApply;
