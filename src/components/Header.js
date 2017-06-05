import React from 'react'; // eslint-disable-line no-unused-vars

import logo from '../imgs/logo.png';
import basket from '../imgs/basket.png';

import '../css/header.css';

const Header = () => {
	return (
		<header>
			<div className="header">
				<img className="header-logo" src={logo} alt="logo" />
				<h1>Quality Trainers with the best prices, guaranteed!</h1>
				<img className="header-basket" src={basket} alt="basket" />
			</div>
		</header>
	);
};

export default Header;
