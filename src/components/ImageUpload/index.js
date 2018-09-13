import React, { Component } from "react";
import Dropzone from "react-dropzone";

import "./ImageUpload.css";

class ImageUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			accepted: [],
			rejected: []
		};
	}

	render() {
		return (
			<div>
				<Dropzone {...this.props} onDrop={this.onDrop} accept="image/*">
					<center>
						<p>Drop photos here</p>
					</center>
				</Dropzone>
				<div className={"imagePreviewContainer"}>
					{this.state.accepted.map((file, index) => {
						return (
							<figure className={"imagePreview"} key={file.name + index}>
								<img src={file.data} alt={file.name} />
								<button
									className="delete is-small imagePreviewDelete"
									aria-label="delete"
									onClick={() => {
										this.removeImage(index);
									}}
								/>
							</figure>
						);
					})}
				</div>
			</div>
		);
	}

	onDrop = (acceptedFiles, rejectedFiles) => {
		acceptedFiles.forEach(file => {
			const reader = new FileReader();
			reader.onload = () => {
				const fileAsDataURL = reader.result;
				// do whatever you want with the file content
				// console.log("File data: ", fileAsBinaryString);
				this.setState({
					accepted: [...this.state.accepted, { name: file.name, data: reader.result }]
				});
			};
			reader.onabort = () => console.log("File reading was aborted");
			reader.onerror = () => console.log("File reading has failed");

			reader.readAsDataURL(file);
			// console.log("Files added: ", this.state.accepted);
		});
	};

	removeImage = imageIndexToRemove => {
		this.setState({
			accepted: this.state.accepted.filter((file, index) => index !== imageIndexToRemove)
		});
	};
}

export default ImageUpload;
