/* global describe, it */
import {expect} from 'chai';

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
      {available: {black: 1, blue: 1}},
      {available: {red: 1}}
		];

		it('returns all products if colours array is empty', () => {
			const actual = helpers.filterByColour(data, []);

			expect(actual).to.equal(data);
		});

		it('returns a new array with the filtered products', () => {
			const actual = helpers.filterByColour(data, colours);
			const expected = [{available: {black: 1, blue: 1}}];

			expect(actual).to.eql(expected);
		});
	});
});
