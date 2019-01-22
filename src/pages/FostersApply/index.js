import React from "react";
import "./FostersApply.css";
import Search from "../../components/Search";

class FostersApply extends React.Component {
	render() {
		return (
			<div>
				<section className="section">
					<div className="container has-text-centered">
						<h1 className="title is-1">How to Apply for Fostering</h1>
						<p className="">
							Start with the Foster Finder. Search available pets and contact resuces with
							questions.
						</p>
						<Search />
					</div>
				</section>
				<section className="hero is-warning is-medium">
					<div className="hero-body">
						<div className="container has-text-centered">
							Each rescue organization has its own application which will ask you about your family,
							housing, and previous experience with pets. If you meet the criteria, you meet the
							pet. If it's a good fit, start fostering.
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default FostersApply;
