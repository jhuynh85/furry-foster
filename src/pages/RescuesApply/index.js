import React from "react";
import "./RescuesApply.css";
import RescueAppForm from "../../components/RescueAppForm";

class RescuesApply extends React.Component {
	componentDidMount() {
		document.title = "Rescues";
	}

	render() {
		return (
			<div className="container">
				<div className="columns">
					<div className="column">
						<section className="section content">
							<h1 className="title is-1">Apply for Partnership</h1>
							<br />
							<h4 className="subtitle is-4">
								We exist to expand your efforts, together we can bring every pet home!
							</h4>
							<p>
								Phasellus elementum volutpat rutrum. Nulla id dolor nulla. Mauris facilisis, urna
								eget blandit aliquet, velit velit pretium est, et feugiat leo velit eu velit.
								Integer consequat nibh at orci fermentum consequat. Nulla consectetur, nibh sit amet
								lobortis bibendum, turpis justo elementum augue, sed vulputate sem sapien eget
								lectus. Etiam iaculis auctor egestas. Nunc vel euismod ipsum, quis volutpat neque.
								Ut dictum ut enim at tincidunt. In in urna rhoncus massa blandit dapibus nec quis
								ligula. In ac ex ac tortor convallis tincidunt sit amet ac dui. Duis scelerisque
								sodales elit, id pulvinar urna vehicula ac.
							</p>
						</section>
					</div>
					<div className="column">
						<section className="section content">
							<RescueAppForm />
						</section>
					</div>
				</div>
			</div>
		);
	}
}

export default RescuesApply;
