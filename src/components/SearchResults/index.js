import React from "react";
import "./SearchResults.css";

class SearchResults extends React.Component {
	render() {
		return (
			<div>
				<div className="tile is-ancestor search-results">
					<div className="tile is-parent is-3">
						<div className="tile search-tile is-child">
							<figure className="image is-3by3">
								<img src="https://bulma.io/images/placeholders/640x480.png" />
							</figure>
							<section className="section content">
								<p className="title">Middle tile</p>
								<p className="subtitle">With an image</p>
							</section>
						</div>
					</div>
					<div className="tile is-parent is-3">
						<div className="tile search-tile is-child">
							<figure className="image is-3by3">
								<img src="https://bulma.io/images/placeholders/640x480.png" />
							</figure>
							<section className="section content">
								<p className="title">Middle tile</p>
								<p className="subtitle">With an image</p>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchResults;
