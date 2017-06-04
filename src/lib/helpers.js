/* global module */

const filterByColour = (products, colours) => {
	if (colours.length === 0) return products;

	return products.filter(product => {
		const coloursAvailable = Object.keys(product.available);

		if (oneElemMatch(coloursAvailable, colours)) {
			return 1;
		}
	});
};

const oneElemMatch = (oneList, secList) => {
	return oneList.some(elem => secList.includes(elem));
};

module.exports = {
	filterByColour,
	oneElemMatch
};