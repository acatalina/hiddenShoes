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

	return (
		<section>
			<div className="container">
				<ProductBox
					data={findProductById(id, data)} />
				<LineThrough />
				<h2>Related products</h2>
				<ProductsList data={findRelatedProductsByColour(id, data)} />
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
	})
};

export default withRouter(ProductPage);
