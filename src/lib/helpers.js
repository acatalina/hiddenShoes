/* global module */

const filterByColour = (products, colours) => {
	if (colours.length === 0) return products;

	return products.filter(product => {
		if (oneElemMatch(product.colours, colours)) {
			return 1;
		}
	});
};

const oneElemMatch = (oneList, secList) => {
	return oneList.some(elem => secList.includes(elem));
};

const createNumbersArray = maxNum => {
	if (!maxNum || typeof maxNum !== 'number') return [];

	const result = [];

	for (let i = 1; i <= maxNum; i++) {
		result.push(i);
	}

	return result;
};

module.exports = {
	filterByColour,
	oneElemMatch,
	createNumbersArray
};