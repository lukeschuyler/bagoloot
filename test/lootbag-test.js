const { assert } = require('chai')
const { addToy, removeToy } = require('../lib/lootbag.js')

describe('lootbag', () => {
	describe('addToy', () => {

		it('should add two arguments to a list toys/names', () => {
			let list = []
			addToy('stapler', 'Milton', list)	
			assert.deepEqual([{toy: 'stapler', kid: 'Milton'}], list)
		});

		it('should throw error if anything other than three arguments are passed', () => {
			assert.throws(() => addtoy('hello'), Error)
		});

	});

	describe('removeToy', () => {
		it('should remove specified item from list', () => {
			let list = [ {kid: 'Milton', toy: 'stapler'} ]
			removeToy( 'Milton', 'stapler', list )
			assert.deepEqual([], list)
		});

		it('should throw error if anything other than three arguments are passed', () => {
			assert.throws(() => removeToy('hello'), Error)
		});
	});
});
