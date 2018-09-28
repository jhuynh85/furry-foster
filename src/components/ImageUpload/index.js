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
				<Dropzone
					className="dropzone"
					activeClassName={"dropzone-active"}
					acceptClassName={"dropzone-accepted"}
					rejectClassName={"dropzone-rejected"}
					onDrop={this.onDrop}
					accept="image/*">
					<p>Drop photos here</p>
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
				// do whatever you want with the file content
				// console.log("File data: ", fileAsBinaryString);
				let newState = [...this.state.accepted, { name: file.name, data: reader.result }];
				this.setState({ accepted: newState });
				this.props.setImageUploadQueue(newState);
			};
			reader.onabort = () => console.log("File reading was aborted");
			reader.onerror = () => console.log("File reading has failed");

			reader.readAsDataURL(file);
			// console.log("Files added: ", this.state.accepted);
		});
	};

	removeImage = imageIndexToRemove => {
		let newState = this.state.accepted.filter((file, index) => index !== imageIndexToRemove);
		this.setState({ accepted: newState });
		this.props.setImageUploadQueue(newState);
	};
}

export default ImageUpload;
