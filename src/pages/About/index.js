import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (      
		<div>
			<h1 class="title is-1">About Us</h1>
			<div class="content">
				<h2 class="subtitle is-2">Who We Are</h2>
				<p>Furry Foster is a 501(c)3 federal non-profit organization dedicated to ending 
				the euthanasia of adoptable pets by connecting them with loving foster families.</p>

				<h2 class="subtitle is-2">What We Can Do</h2>
				<p>We support local animal rescue organizations and shelters with our services.</p>

				<h2 class="subtitle is-2">Why Our Cause Matters</h2>
				<p>Sadly, over 4 Million Shelter Pets are euthanized every year. We believe foster 
				families can change that.</p>

				<p>9,000 shelter pets a day are killed, not because of aggression, 
				behavior or illness but simply due to a lack of space and resources. 
				By introducing animals lovers to fostering and joining forces with local rescues and shelters, 
				many more animal lives can be saved.</p>

				<p>We can't do it alone, but together we can bring every pet home.</p>
			</div>
		</div>
	);
  }
}

export default About;
