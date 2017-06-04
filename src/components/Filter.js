import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

import '../css/filter.css';

const Filter = props => {
	return (
    <div>
      <h3>Filter by:</h3>
      <ul className="filter-list">
        <li>
          <input type="checkbox" id="filter-black" value="black" name="black"
            onClick={toggleColour.bind(null, props.setFilter)} />
          <label htmlFor="filter-black">Black</label>
        </li>
        <li>
          <input type="checkbox" id="filter-white" value="white" name="white"
            onClick={toggleColour.bind(null, props.setFilter)} />
          <label htmlFor="filter-white">White</label>
        </li>
        <li>
          <input type="checkbox" id="filter-blue" value="blue" name="blue"
            onClick={toggleColour.bind(null, props.setFilter)} />
          <label htmlFor="filter-blue">Blue</label>
        </li>
        <li>
          <input type="checkbox" id="filter-red" value="red" name="red"
            onClick={toggleColour.bind(null, props.setFilter)} />
          <label htmlFor="filter-red">Red</label>
        </li>
      </ul>
    </div>
	);
};

const toggleColour = (setFilter, e) => {
	const { checked, name } = e.target;

	if (checked === true) {
		return setFilter(name, 'add');
	}

	return setFilter(name, 'remove');
};

Filter.propTypes = {
	setFilter: PropTypes.func.isRequired
};

export default Filter;