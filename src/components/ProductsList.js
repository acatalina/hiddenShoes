import React from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

import ProductCard from './ProductCard'; // eslint-disable-line no-unused-vars

import '../css/productlist.css';

const ProductsList = props => {
	return (
		<ul className="product-list">
			{generateProducts(props.data)}
		</ul>
	);
};

const generateProducts = products => {
	return products.map((product, i) => {
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
};

ProductsList.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		img: PropTypes.string,
		were: PropTypes.number,
		price: PropTypes.number.isRequired
	})
};

export default ProductsList;