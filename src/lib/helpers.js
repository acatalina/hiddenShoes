/* global module */

/**
 * @method filterByColour
 * @param {Array} products - objects 
 * @param {Array} colours - strings
 * @return {Array} with products with colours that matches the colours given
 */
const filterByColour = (products, colours) => {
	if (colours.length === 0) return products;

	return products.filter(product => {
		if (oneElemMatch(product.colours, colours)) {
			return 1;
		}
	});
};

/**
 * @method oneElemMatch
 * @param {Array} oneList 
 * @param {Array} secList
 * @return {bool} depending on wether the params share at least one element 
 */
const oneElemMatch = (oneList, secList) => {
	return oneList.some(elem => secList.includes(elem));
};

/**
 * @method createNumbersArray
 * @param {number} maxNum 
 * @return {Array} including numbers from 1 to the given number included
 */
const createNumbersArray = maxNum => {
	if (!maxNum || typeof maxNum !== 'number') return [];

	const result = [];

	for (let i = 1; i <= maxNum; i++) {
		result.push(i);
	}

	return result;
};

/**
 * @method findProductById
 * @param {string} id 
 * @param {Array} data - objects
 * @return {Object} object with id property matching the id given using strictly equal
 */
const findProductById = (id, data = []) => {
	if (!id || !data.length) return {};

	return data.filter(product => product.id === id)[0];
};

/**
 * @method findRelatedProductsByColour
 * @param {Object} mainProduct 
 * @param {Array} data - objects
 * @return {Array} objects matching colours from mainProduct colours
 */
const findRelatedProductsByColour = (mainProduct, data) => {
	return data.filter(product => {
		if (product.id === mainProduct.id) return false;

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