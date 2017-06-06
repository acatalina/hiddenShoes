import React from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

import ProductCard from './ProductCard'; // eslint-disable-line no-unused-vars

import '../css/productlist.css';

const ProductsList = ({ data }) => {
	return (
		<ul className="product-list">
			{generateProducts(data)}
		</ul>
	);
};

const generateProducts = products => {
	return products.map(product => {
		return (
			<ProductCard
				key={product.id}
				id={product.id}
				name={product.name}
				img={product.img}
				were={product.were}
				price={product.price}
			/>
		);
	});
};

ProductsList.propTypes = {
	data: PropTypes.array.isRequired,
};

export default ProductsList;
