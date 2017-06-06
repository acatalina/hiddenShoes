import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

import Price from './Price'; // eslint-disable-line no-unused-vars

import '../css/productcard.css';

const ProductCard = props => {
	return (
		<li className="product-card">
			<div className="product-card-wrapper">
				<Link className="product-link" to={`/shoes/${props.id}`} />
				<div className="product-card-img-wrapper">
					<img className="product-card-img"
						src={`/imgs/${props.img}`}
						alt={props.name} />
				</div>
				<div className="product-details">
					<h2>{props.name}</h2>
					<Price
						wrapperClass="product-card-prices"
						were={props.were}
						wereClass="product-card-were"
						price={props.price}
						priceClass="product-card-price" />
				</div>
			</div>
		</li>
	);
};

ProductCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	were: PropTypes.number,
	price: PropTypes.number.isRequired
};

export default ProductCard;
