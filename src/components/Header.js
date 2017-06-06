import React from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

import logo from '../imgs/logo.png';
import basket from '../imgs/basket.png';

import '../css/header.css';

const Header = (props) => {
	return (
		<header>
			<div className="header">
				<img className="header-logo" src={logo} alt="logo" />
				<h1>Quality Trainers with the best prices, guaranteed!</h1>
				<div className="header-basket-wrapper">
					<img className="header-basket" src={basket} alt="basket" />
					{getCounter(props.itemsCounter)}
				</div>
			</div>
		</header>
	);
};

const getCounter = (itemsCounter) => {
	if (!itemsCounter) return null;

	return (
		<div className="header-basket-counter">
			<span>{itemsCounter}</span>
		</div>
	);
};

Header.propTypes = {
	itemsCounter: PropTypes.number.isRequired
};

export default Header;
