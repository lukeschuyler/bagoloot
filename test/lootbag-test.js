const { assert } = require('chai')
const { addToy, addTest } = require('../lib/addToy.js')
const { removeToy } = require('../lib/removeToy.js')

describe('lootbag', () => {

	describe('addToy', () => {

		it('should add two arguments to a list toys/names', () => {
			return addTest()
				.then((kid) => {
					assert.isObject(kid)
				})
		});

	});

	// describe('removeToy', () => {

	// 	it('should remove specified item from list', () => {
	// 		let list = [ { toy: 'stapler', kid: 'Milton' } ]
	// 		removeToy( 'Milton', 'stapler', list )
	// 		assert.deepEqual([], list)
	// 	});

	// 	it('should throw error if anything other than three arguments are passed', () => {
	// 		assert.throws(() => removeToy('hello'), Error)
	// 	});

	// });

});
