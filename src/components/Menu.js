import React from 'react'; // eslint-disable-line no-unused-vars
import { NavLink } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

import '../css/menu.css';

const Menu = (props) => {
	let toggle = props.toggled ? 'open' : '';

	return (
		<nav id="nav-wrapper" className={toggle}>
			<h1>MENU</h1>
			<ul className="nav">
				<li><NavLink to="/">Homepage</NavLink></li>
				<li><NavLink to="/">Mens Trainers</NavLink></li>
				<li><NavLink to="/">Womens Trainers</NavLink></li>
				<li><NavLink to="/">Kids Trainers</NavLink></li>
				<li><NavLink className="nav-sale" to="/">SALE</NavLink></li>
			</ul>
			<div id="nav-ham" onClick={props.toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};

Menu.propTypes = {
	toggled: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired
};

export default Menu;
