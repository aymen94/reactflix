import React, { Component } from 'react';
import Modal from 'react-modal';
import '../style/style.css';


class Card extends Component {

	constructor() {
		super();
		this.state = {
			modal: false
		};
		this.imageUrl = 'http://image.tmdb.org/t/p/original';
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modal: true });
	}

	closeModal() {
		this.setState({ modal: false });
	}
	modal() {
		return (
			<Modal isOpen={this.state.modal}
				onRequestClose={this.closeModal}
				className="modal"
				overlayClassName="modalOverlay"
				contentLabel="Modal"
			>
				<div className="modalTitle">
					<p>{this.props.title}</p>
					<p>rating:{this.props.data.vote_average}</p>
				</div>
				<div className="modalBody">
					<center>
						<img src={this.imageUrl + this.props.img} width="35%" alt={this.props.title} />
					</center>
					<p>{this.props.data.overview}</p>
					<br />
					<br />
					<div className="modalFooter">
						<div className="btn" title="this is only Demo">Trailer</div>
						<div className="btn" title="this is only Demo">Watch</div>
					</div>
				</div>
			</Modal>);
	}
	render() {
		return (
			<div className="container" >
				<img src={this.imageUrl + this.props.img} alt={this.props.title} className="image" />
				<div className="overlay">
					<div className="txt btn"><a onClick={this.openModal}>Watch</a></div>
				</div>
				{this.modal()}
			</div>
		);
	}
}
export default Card;