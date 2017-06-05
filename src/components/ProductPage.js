import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { withRouter } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { findProductById, findRelatedProductsByColour } from '../lib/helpers';

import ProductBox from './ProductBox'; // eslint-disable-line no-unused-vars
import LineThrough from './LineThrough'; // eslint-disable-line no-unused-vars
import ProductsList from './ProductsList'; // eslint-disable-line no-unused-vars

class ProductPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sizeSelected: 0,
			quantitySelected: 0
		};

		this.selectSize = this.selectSize.bind(this);
		this.selectQuantity = this.selectQuantity.bind(this);
	}
	render() {
		const {id} = this.props.match.params;
		const {data} = this.props;

		return (
			<section>
				<div className="container">
					<ProductBox data={findProductById(id, data)} 
						sizeSelected={this.state.sizeSelected}
						selectSize={this.selectSize}
						quantitySelected={this.state.quantitySelected}
						selectQuantity={this.selectQuantity}
					/>
					<LineThrough />
					<h2>Related products</h2>
					<ProductsList data={findRelatedProductsByColour(id, data)} />
				</div>
			</section>
		);
	}
	selectSize(e) {
		const newSize = e.target.value;

		this.setState(() => {
			return { 
				sizeSelected: newSize, 
				quantitySelected: 0
			};
		});
	}
	selectQuantity(e) {
		const newQuantity = e.target.value;

		this.setState(() => {
			return { quantitySelected: newQuantity };
		});
	}
}

export default withRouter(ProductPage);
