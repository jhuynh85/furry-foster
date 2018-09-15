import React, { Component } from "react";

class ProfileSettings extends Component {
	render() {
		return (
			<div class="content">
				<h1>Profile Settings</h1>
				<p>Update your email settings.</p>
				<section class="">
					<form>
						<div>
							<a className="button is-warning">
								<strong>Update</strong>
							</a>
						</div>
					</form>
				</section>
			</div>
		);
	}
}

export default ProfileSettings;
