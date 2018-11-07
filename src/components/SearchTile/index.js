import React, { Component } from "react";
import Button from "../Button";
import "./SearchTile.css";

class SearchTile extends Component {
	constructor(props) {
		super(props);
		this.handleMouseHover = this.handleMouseHover.bind(this);
		this.state = {
			isHovering: false
		};
	}

	handleMouseHover() {
		this.setState(this.toggleHoverState);
	}

	toggleHoverState(state) {
		console.log("state", state.isHovering);
		return {
			isHovering: !state.isHovering
		};
	}

	render() {
		return (
			<div className={this.props.className}>
				<div
					className="searchtile-container"
					href={this.props.searchTileURL}
					onMouseEnter={this.handleMouseHover}
					onMouseLeave={this.handleMouseHover}>
					<div
						className="searchtile-image"
						style={{
							backgroundImage: "url(" + this.props.searchTileImage + ")",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center"
						}}>
						<div className="searchtile-overlay">
							<div className="searchtile-header">
								<div className="searchtile-name">{this.props.searchTileName}</div>
								{this.state.isHovering && (
									<div className="searchtile-details">
										<p>
											{this.props.searchTileAge} {this.props.searchTileGender}
											<br />
											{this.props.searchTileLocation}
										</p>
										<Button link={this.props.searchTileURL} text="More Info" />
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchTile;
