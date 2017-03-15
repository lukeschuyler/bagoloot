const { assert } = require('chai')
const { addToy, addTest } = require('../lib/addToy.js')
const { removeToy } = require('../lib/removeToy.js')

describe('lootbag', () => {

	describe('addToy', () => {

		it('should add two arguments to a list toys/names', () => {
			let kid = 'Johnny'
			new Promise((resolve, reject) => {
				resolve(addToy('Scooter', kid))
			}).then(() => {
				return addTest(kid)
					.then((kid) => {
						assert.isObject(kid)
						console.log(kid)
				})
				.catch(() => console.log('catch'))
			})
		});

	});

});
