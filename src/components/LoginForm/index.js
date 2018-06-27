import React from "react";
import "./LoginForm.css";

const Modal = ({ children, closeModal, modalState, title }) => {
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
				<footer className="modal-card-foot">
					<span>
						New? <a>Create an account.</a>
					</span>
				</footer>
			</div>
		</div>
	);
};

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalState: false
		};

		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState((prev, props) => {
			const newState = !prev.modalState;
			return { modalState: newState };
		});
	}

	render() {
		return (
			<div className="container is-fluid">
				<br />
				<div className="title-case">
					<h1 className="title is-1">Sign Up</h1>
				</div>
				<form>
					<div className="field">
						<label className="label">Email Address</label>
						<div className="control">
							<input
								className="input"
								type="email"
								name="orgEmail"
								placeholder="fosters@example.com"
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Password</label>
						<div className="control">
							<input className="input" type="text" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">Confirm Password</label>
						<div className="control">
							<input className="input" type="text" placeholder="" />
						</div>
					</div>
					<input className="button is-warning is-medium" type="submit" value="Submit" />
				</form>
				<section className="section">
					<div className="container">
						<div className="has-text-centered content">
							<a className="button is-primary" onClick={this.toggleModal}>
								Login
							</a>
						</div>

						<Modal closeModal={this.toggleModal} modalState={this.state.modalState} title="Sign In">
							<form>
								<div className="field">
									<label className="label">Email Address</label>
									<div className="control">
										<input
											className="input"
											type="email"
											name="orgEmail"
											placeholder="fosters@example.com"
										/>
									</div>
								</div>
								<div className="field">
									<label className="label">Password</label>
									<div className="control">
										<input className="input" type="text" placeholder="" />
									</div>
								</div>
								<input className="button is-warning is-medium" type="submit" value="Submit" />
							</form>
						</Modal>
					</div>
				</section>;
			</div>
		);
	}
}

export default LoginForm;
