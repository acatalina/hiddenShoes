/* global describe, it */
import { expect } from 'chai';

import * as helpers from '../src/lib/helpers';

describe('Helpers', () => {
	describe('oneElemMatch', () => {
		it('returns true if both lists share at least one element', () => {
			const array = [1, 2];
			const arraySec = [1];
			const actual = helpers.oneElemMatch(array, arraySec);

			expect(actual).to.be.true;
		});

		it('returns false if both lists do not share any elements', () => {
			const array = [1, 2];
			const arraySec = [3];
			const actual = helpers.oneElemMatch(array, arraySec);

			expect(actual).to.be.false;
		});
	});

	describe('filterByColour', () => {
		const colours = ['black'];
		const data = [
			{ colours: ['black', 'blue'] },
			{ colours: ['red'] }
		];

		it('returns all products if colours array is empty', () => {
			const actual = helpers.filterByColour(data, []);

			expect(actual).to.equal(data);
		});

		it('returns a new array with the filtered products', () => {
			const actual = helpers.filterByColour(data, colours);
			const expected = [{ colours: ['black', 'blue'] }];

			expect(actual).to.eql(expected);
		});
	});

	describe('createNumbersArray', () => {
		it('creates an array with numbers in ascending order from 1 to the number given', () => {
			const actual = helpers.createNumbersArray(2);
			const expected = [1, 2];

			expect(actual).to.eql(expected);
		});

		it('returns an empty array when no number or empty parameters are given', () => {
			expect(helpers.createNumbersArray()).to.eql([]);
			expect(helpers.createNumbersArray('nonsense')).to.eql([]);
			expect(helpers.createNumbersArray(NaN)).to.eql([]);
			expect(helpers.createNumbersArray([1])).to.eql([]);
		});
	});

	describe('findProductById', () => {
		it('finds and return an object with matching id from an array of objects', () => {
			const array = [{id: 2}, {id: 3}];
			const actual = helpers.findProductById(2, array);
			const expected = {id: 2};
			
			expect(actual).to.eql(expected);
		});

		it('handles invalid inputs', () => {
			expect(helpers.findProductById()).to.eql({});
			expect(helpers.findProductById(1, {})).to.eql({});
			expect(helpers.findProductById(1, [])).to.eql({});
			expect(helpers.findProductById(NaN, [])).to.eql({});
		});
	});

	describe('findRelatedProductsByColour', () => {
		it('filters an array of objects returning objects with matching colours from the id given', () => {
			const array = [
				{id: 1, colours: ['black', 'red']}, 
				{id: 2, colours: ['black']}, 
				{id: 3, colours: ['blue']}
			];
			const actual = helpers.findRelatedProductsByColour(array[0], array);
			const expected = [{id: 2, colours: ['black']}];

			expect(actual).to.eql(expected);
		});

		it('returns an empty array if there is no matches', () => {
			const array = [
				{id: 1, colours: ['black', 'red']}, 
				{id: 2, colours: ['blue']}, 
				{id: 3, colours: ['blue']}
			];
			const actual = helpers.findRelatedProductsByColour(array[0], array);
			const expected = [];

			expect(actual).to.eql(expected);
		});
	});
});
