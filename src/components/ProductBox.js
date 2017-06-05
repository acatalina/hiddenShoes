import React from 'react'; // eslint-disable-line no-unused-vars
// import { PropTypes } from 'prop-types';

import SelectSize from './SelectSize'; // eslint-disable-line no-unused-vars
import SelectQuantity from './SelectQuantity'; // eslint-disable-line no-unused-vars
import Price from './Price'; // eslint-disable-line no-unused-vars

import '../css/productbox.css';

const ProductBox = props => {
	const { data } = props;

	return (
		<article className="product-box">
			<div className="product-box-wrapper">
				<div className="product-box-img-wrapper">
					<img
						className="product-box-img"
						src={`/imgs/${data.img}`}
						alt={data.name} />
				</div>
				<div className="product-box-details">
					<h1>{data.name}</h1>
					<p>{data.description}</p>
					<Price
						price={data.price}
						were={data.were}
						priceClass="product-box-price"
						wereClass="product-box-were"
					/>
					<form className="product-box-form"
						onSubmit={submitHandler}>
						<SelectSize
							stock={data.available}
							selectSize={props.selectSize}
							sizeSelected={props.sizeSelected} />
						<SelectQuantity
							stock={data.available}
							sizeSelected={props.sizeSelected}
							selectQuantity={props.selectQuantity}
							quantitySelected={props.quantitySelected} />
						<input type="submit" value="ADD TO BASKET" />
					</form>
				</div>
			</div>
		</article>
	);
};

const submitHandler = (e) => {
	e.preventDefault();
};

export default ProductBox;
