import React from "react";
import "./About.css";

class About extends React.Component {
	componentDidMount() {
		document.title = "About Us";
	}

	render() {
		return (
			<div className="container">
				<section className="section content">
					<h1 className="title is-1">About Us</h1>
					<div className="content">
						<h4 className="subtitle is-4">Who We Are</h4>
						<p>
							Furry Foster is a 501(c)(3) federal non-profit organization dedicated to ending the
							euthanasia of adoptable pets by connecting them with loving foster families.
						</p>

						<h4 className="subtitle is-4">What We Can Do</h4>
						<p>We support local animal rescue organizations and shelters with our services.</p>

						<h4 className="subtitle is-4">Why Our Cause Matters</h4>
						<p>
							Sadly, over 4 Million Shelter Pets are euthanized every year. We believe foster
							families can change that.
						</p>

						<p>
							9,000 shelter pets a day are killed, not because of aggression, behavior or illness
							but simply due to a lack of space and resources. By introducing animals lovers to
							fostering and joining forces with local rescues and shelters, many more animal lives
							can be saved.
						</p>

						<p>We can't do it alone, but together we can bring every pet home.</p>
					</div>
				</section>
			</div>
		);
	}
}

export default About;
