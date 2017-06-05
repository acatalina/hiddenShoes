import React from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

import { createNumbersArray } from '../lib/helpers';

const SelectQuantity = props => {
	let quantity = 0;

	if (props.stock) {
		quantity = props.stock[props.sizeSelected];
	}

	const quantitiesArray = createNumbersArray(quantity);

	return (
		<div>
			<label htmlFor="quantity">Quantity</label>
			<select
				name="quantity"
				id="quantity"
				value={props.quantitySelected}
				onChange={props.selectQuantity}>
				<option value="0">Make Selection...</option>
				{quantitiesArray.map((quantity, i) => {
					return (
						<option key={i} value={quantity}>
							{quantity}
						</option>
					);
				})}
			</select>
		</div>
	);
};

SelectQuantity.propTypes = {
	stock: PropTypes.object.isRequired,
	sizeSelected: PropTypes.number.isRequired,
	selectQuantity: PropTypes.func.isRequired,
	quantitySelected: PropTypes.number.isRequired
};

export default SelectQuantity;
