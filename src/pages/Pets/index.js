import React from "react";
import SearchFilters from "../../components/SearchFilters";
import SearchResults from "../../components/SearchResults";
import "./Pets.css";

class Pets extends React.Component {
	render() {
		return (
			<div>
				<div className="container ">
					<section className="section content">
						<h1 className="is-size-1">Find Pets</h1>
						<p>19,289 Dogs near 92126</p>
						<div className="columns">
							<div className="column">
								<SearchFilters />
							</div>
						</div>
						<SearchResults />
					</section>
				</div>
			</div>
		);
	}
}

export default Pets;
