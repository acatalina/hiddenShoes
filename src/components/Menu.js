import React from 'react'; // eslint-disable-line no-unused-vars
import { NavLink } from 'react-router-dom'; // eslint-disable-line no-unused-vars

import './css/menu.css';

const Menu = () => {
	return (
    <nav>
      <h1>Menu</h1>
      <ul className="nav">
        <li><NavLink to="/">Homepage</NavLink></li>
        <li><NavLink to="/">Mens Trainers</NavLink></li>
        <li><NavLink to="/">Womens Trainers</NavLink></li>
        <li><NavLink to="/">Kids Trainers</NavLink></li>
        <li><NavLink to="/">SALE</NavLink></li>
      </ul>
    </nav>
	);
};

export default Menu;
