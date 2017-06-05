import React from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

const divStyle = {
	position: 'absolute',
	width: '100%',
	height: '100%',
	left: '0',
	bottom: '0',
	background: 'rgba(51, 51, 51, 0.9)',
	transition: '.2s all ease-in-out',
	zIndex: '2',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	cursor: 'pointer',
	padding: '2em'
};

const imgStyle = {
	width: '70%',
};

const Modal = props => {
	if (!props.isOpen) return null;

	return (
		<div onClick={props.close} style={divStyle}>
			<img style={imgStyle} src={props.img} alt={props.name} />
		</div>
	);
};

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	img: PropTypes.string.isRequired,
	alt: PropTypes.string
};

export default Modal;