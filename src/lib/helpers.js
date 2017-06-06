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

const findProductById = (id, data) => {
	if (!id || !Array.isArray(data) || !data.length) return {};

	return data.filter(product => product.id === id)[0];
};

const findRelatedProductsByColour = (id, data) => {
	const mainProduct = findProductById(id, data);

	return data.filter(product => {
		if (product.id === id) return false;

		return oneElemMatch(product.colours, mainProduct.colours);
	}).slice(0, 4);
};

module.exports = {
	filterByColour,
	oneElemMatch,
	createNumbersArray,
	findProductById,
	findRelatedProductsByColour
};