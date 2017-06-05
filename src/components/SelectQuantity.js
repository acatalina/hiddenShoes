import React from 'react'; // eslint-disable-line no-unused-vars
// import { PropTypes } from 'prop-types';

import { createNumbersArray } from '../lib/helpers';

const SelectColour = props => {
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

export default SelectColour;