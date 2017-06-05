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
});
