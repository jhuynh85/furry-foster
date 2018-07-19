import React from "react";

const Submenu = props => {
	console.log("prop.match: ", props.match);
	return (
		<section className="section">
			<div className="menu">
				<p className="menu-label">Manage Account</p>
				<ul className="menu-list">
					<li>
						<a>Account</a>
					</li>
					<li>
						<a>Profile</a>
					</li>
					<li>
						<a>Settings</a>
					</li>
				</ul>
				<p className="menu-label">Manage Pet</p>
				<ul className="menu-list">
					<li>
						<a>View Pets</a>
					</li>
					<li>
						<a>Add Pets</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Submenu;
