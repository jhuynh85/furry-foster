import React, { Component } from "react";
import "./Modal.css";

const Modal = ({ children, closeModal, modalState, title, footer }) => {
	if (!modalState) {
		return null;
	}

	return (
		<div className="modal is-active">
			<div className="modal-background" onClick={closeModal} />
			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title">{title}</p>
					<button className="delete" onClick={closeModal} />
				</header>
				<section className="modal-card-body">
					<div className="content">{children}</div>
				</section>
				<footer className="modal-card-foot">{footer}</footer>
			</div>
		</div>
	);
};

export default Modal;
