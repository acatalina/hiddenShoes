import React from 'react'; // eslint-disable-line no-unused-vars
import { withRouter } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { findProductById, findRelatedProductsByColour } from '../lib/helpers';
import { PropTypes } from 'prop-types';

import ProductBox from './ProductBox'; // eslint-disable-line no-unused-vars
import LineThrough from './LineThrough'; // eslint-disable-line no-unused-vars
import ProductsList from './ProductsList'; // eslint-disable-line no-unused-vars

const ProductPage = (props) => {
	const { id } = props.match.params;
	const { data } = props;
	const product = findProductById(id, data);

	return (
		<section>
			<div className="container">
				<ProductBox
					data={product} 
					addProductToBasket={props.addProductToBasket} />
				<LineThrough />
				<h2>Related products</h2>
				<ProductsList data={findRelatedProductsByColour(product, data)} />
			</div>
		</section>
	);
};

ProductPage.propTypes = {
	data: PropTypes.array.isRequired,
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired
		})
	}),
	addProductToBasket: PropTypes.func.isRequired
};

export default withRouter(ProductPage);
