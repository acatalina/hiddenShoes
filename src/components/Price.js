import React from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types'; // eslint-disable-line no-unused-vars

const Price = props => {
	const {were, price} = props;
	const werePrice = `Were £${were}`;
	let actualPrice = `£${price}`;

	if (were) {
		actualPrice = 'NOW ' + actualPrice;
	}

	function getWere(were) {
		if (!were) return null;

		return (
			<span className={props.wereClass}>
				{werePrice}
			</span>
		);
	}

	return (
		<div className={props.wrapperClass}>
			{getWere(were)}
			<span className={props.priceClass} >
				{actualPrice}
			</span >
		</div>
	);
};

Price.propTypes = {
	wrapperClass: PropTypes.string,
	were: PropTypes.number,
	wereClass: PropTypes.string,
	price: PropTypes.number.isRequired,
	priceClass: PropTypes.string
};

export default Price;
