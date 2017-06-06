import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

import ProductsList from './ProductsList'; // eslint-disable-line no-unused-vars
import Filter from './Filter'; // eslint-disable-line no-unused-vars
import Fade from './Fade'; // eslint-disable-line no-unused-vars
import { filterByColour } from '../lib/helpers';

class SalesPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterBy: []
		};

		this.setFilter = this.setFilter.bind(this);
	}
	render() {
		const { data } = this.props;
		const { filterBy } = this.state;

		return (
			<Fade component="section">
				<div className="container">
					<h1>SALE TRAINERS</h1>
					<Filter setFilter={this.setFilter} />
					<ProductsList data={filterByColour(data, filterBy)} />
				</div>
			</Fade>
		);
	}
	setFilter(newColour, method) {
		if (method === 'add') {
			this.setState(({ filterBy }) => {
				let newFilter = filterBy.slice();
				newFilter.push(newColour);

				return { filterBy: newFilter };
			});
		} else {
			this.setState(({ filterBy }) => {
				let newFilter = filterBy.filter(colour => newColour !== colour);

				return { filterBy: newFilter };
			});
		}
	}
}

SalesPage.propTypes = {
	data: PropTypes.array.isRequired
};

export default SalesPage;
