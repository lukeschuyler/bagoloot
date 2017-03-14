const { assert } = require('chai')
const { addToy } = require('../lib/lootbag.js')

describe('lootbag', () => {
	describe('addToy', () => {
		it('should add two arguments to a list toys/names', () => {
			let array = []
			array.push(addToy('stapler', 'Milton'))
			assert.deepEqual([{toy: 'stapler', kid: 'Milton'}], array)
		})
	})
})
