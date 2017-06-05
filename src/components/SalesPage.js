import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

import ProductCard from './ProductCard'; // eslint-disable-line no-unused-vars
import Filter from './Filter'; // eslint-disable-line no-unused-vars
import { filterByColour } from '../lib/helpers';

import '../css/salespage.css';

class SalesPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterBy: []
		};

		this.setFilter = this.setFilter.bind(this);
	}
	render() {
		return (
			<section>
				<div className="container">
					<h1>SALE TRAINERS</h1>
					<Filter setFilter={this.setFilter} />
					<ul className="product-list">
						{this.generateProducts(this.props.data, this.state.filterBy)}
					</ul>
				</div>
			</section>
		);
	}
	generateProducts(products, colours) {
		const filteredProducts = filterByColour(products, colours);

		return filteredProducts.map((product, i) => {
			return (
				<ProductCard
					key={i}
					id={product.id}
					name={product.name}
					img={product.img}
					were={product.were}
					price={product.price}
				/>
			);
		});
	}
	setFilter(newColour, method) {
		if (method === 'add') {
			this.setState((prevState) => {
				let newFilter = prevState.filterBy.slice();
				newFilter.push(newColour);

				return { filterBy: newFilter };
			});
		} else {
			this.setState((prevState) => {
				let newFilter = prevState.filterBy.filter(colour => newColour !== colour);

				return { filterBy: newFilter };
			});
		}
	}
}

SalesPage.propTypes = {
	data: PropTypes.array.isRequired
};

export default SalesPage;
