import React from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types'; // eslint-disable-line no-unused-vars

const Price = props => {
	return (
		<div className={props.wrapperClass}>
			{props.were 
				? <span className={props.wereClass || ''}>
						Were £{props.were}
					</span>
					: null}
			<span className={props.priceClass || ''} >
				{props.were ? 'NOW ' : ''}£{props.price}
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
