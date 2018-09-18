import React from "react";
import "./SearchFilters.css";

class SearchFilters extends React.Component {
	render() {
		return (
			<div>
				<form class=" level ">
					<div className="field has-addons has-addons-centered level-item has-text-centered">
						<p className="control">
							<span className="select is-hover">
								<select>
									<option selected disabled>
										FIND
									</option>
									<option value="dogs">DOGS</option>
									<option value="cats">CATS</option>
								</select>
							</span>
						</p>
					</div>
					<div className="field has-addons has-addons-centered level-item has-text-centered">
						<p className="control">
							<span className="select is-hover">
								<select>
									<option selected disabled>
										BREEDS HERE
									</option>
									<option value="dogs">PITBULL</option>
									<option value="cats">LABRADOR</option>
								</select>
							</span>
						</p>
					</div>
					<div className="field has-addons has-addons-centered level-item has-text-centered">
						<label class="checkbox filter-checkbox">
							<input type="checkbox" />
							Small
						</label>
						<label class="checkbox filter-checkbox">
							<input type="checkbox" />
							Medium
						</label>
						<label class="checkbox filter-checkbox">
							<input type="checkbox" />
							Large
						</label>
						<label class="checkbox filter-checkbox">
							<input type="checkbox" />
							X-Large
						</label>
					</div>
					<div className="field has-addons has-addons-centered level-item has-text-centered">
						<label class="checkbox filter-checkbox">
							<input type="checkbox" />
							Young
						</label>
						<label class="checkbox filter-checkbox">
							<input type="checkbox" />
							Adult
						</label>
						<label class="checkbox filter-checkbox">
							<input type="checkbox" />
							Senior
						</label>
					</div>
					<div className="field has-addons has-addons-centered level-item has-text-centered">
						<label class="checkbox filter-checkbox">
							<input type="checkbox" />
							Male
						</label>
						<label class="checkbox filter-checkbox">
							<input type="checkbox" />
							Female
						</label>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchFilters;
