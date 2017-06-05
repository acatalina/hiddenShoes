import React from 'react'; // eslint-disable-line no-unused-vars
import { PropTypes } from 'prop-types';

const SelectSize = props => {
	const stock = props.stock || [];

	let sizes = Object.keys(stock);
	sizes.sort((a, b) => a - b);

	return (
		<div>
			<label htmlFor="size">Size</label>
			<select
				name="size"
				id="size"
				value={props.sizeSelected}
				onChange={props.selectSize}>
				<option value="0">Make Selection...</option>
				{sizes.map((size, i) => {
					return (
						<option key={i} value={size}>
							{size}
						</option>
					);
				})}
			</select>
		</div>
	);
};

SelectSize.propTypes = {
	stock: PropTypes.object.isRequired,
	selectSize: PropTypes.func.isRequired,
	sizeSelected: PropTypes.number.isRequired
};

export default SelectSize;
