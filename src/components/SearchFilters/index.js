import React from "react";
import "./SearchFilters.css";

class SearchFilters extends React.Component {
	render() {
		return (
			<div>
				<form className="columns search-filter-form">
					<div className="column is-inline-flex">
						<div className="field has-addons has-text-centered">
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

						<div className="field has-addons has-text-centered">
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
						<div className="field has-addons has-text-centered">
							<label className="checkbox filter-checkbox">
								<input type="checkbox" className="hide-input" />
								Male
							</label>
							<label className="checkbox filter-checkbox">
								<input type="checkbox" className="hide-input" />
								Female
							</label>
						</div>
						<div className="field has-addons has-text-centered">
							<label className="checkbox filter-checkbox">
								<input type="checkbox" className="hide-input" />
								Small
							</label>
							<label className="checkbox filter-checkbox">
								<input type="checkbox" className="hide-input" />
								Medium
							</label>
							<label className="checkbox filter-checkbox">
								<input type="checkbox" className="hide-input" />
								Large
							</label>
							<label className="checkbox filter-checkbox">
								<input type="checkbox" className="hide-input" />
								X-Large
							</label>
						</div>
						<div className="field has-addons has-text-centered">
							<label className="checkbox filter-checkbox">
								<input type="checkbox" className="hide-input" />
								Baby
							</label>
							<label className="checkbox filter-checkbox">
								<input type="checkbox" className="hide-input" />
								Young
							</label>
							<label className="checkbox filter-checkbox">
								<input type="checkbox" className="hide-input" />
								Adult
							</label>
							<label className="checkbox filter-checkbox">
								<input type="checkbox" className="hide-input" />
								Senior
							</label>
						</div>
					</div>
				</form>
				<section>
					Sort By <br />
					Newest
					<br />
					Closest
				</section>
			</div>
		);
	}
}

export default SearchFilters;
