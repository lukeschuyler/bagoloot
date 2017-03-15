const { assert, expect } = require('chai')
const { addToy, addTest } = require('../lib/addToy.js')
const { removeToy } = require('../lib/removeToy.js')
const { listChildren } = require('../lib/listChildren.js')
const { listToys } = require('../lib/listToys.js')
const { setDelivered } = require('../lib/setDelivered.js')


describe('lootbag', () => {

	describe('addToy', () => {

		// it('should add two arguments to a list toys/names', () => {
		// 	let kid = 'Johnny'
		// 	new Promise((resolve, reject) => {
		// 		resolve(addToy('Scooter', kid))
		// 	}).then(() => {
		// 		addTest(kid)
		// 			.then((kid_data) => {
		// 				assert.isObject(kid_data)
		// 				console.log(kid_data)
		// 		})
		// 		.catch(() => console.log('catch'))
		// 	})
		// });

		it('should error if two parameters are not passed', () => {		
			assert.throws( () => { addToy('gi joe') } )
		})
	});

	describe('listChildren', () => {
		it('should return an array', () => {
			listChildren()
				.then((arr) => {
					assert.isArray(arr)
			})
		})
		it('should return an array of Strings', () => {
			listChildren()
				.then((arr) => {
					assert.isString(arr[0])
			})
		})

	})

	describe('listToys', () => {
		it('should return an array', () => {
			listToys()
				.then((arr) => {
					assert.isArray(arr)
			})
		})
		it('should return an array of Strings', () => {
			listToys()
				.then((arr) => {
					assert.isString(arr[0])
			})
		})
	})

	describe('setDelivered', () => {
		it('should error if two parameters are not passed', () => {		
			assert.throws( () => { setDelivered('gi joe') } )
		})
	});

	describe('removeToy', () => {
		// it('should remove a row from database based on two parameters', () => {
		// 	let kid = 'Johnny'
		// 	new Promise((resolve, reject) => {
		// 		resolve(removeToy('Scooter', kid))
		// 	}).then(() => {
		// 		addTest(kid)
		// 			.then((kid_data) => {
		// 				assert.isUndefined(kid_data.Name)
		// 		})
		// 	})
		// 	.catch(() => {
		// 		assert.isUndefined(kid_data.Name)
		// 	})
		// });

		it('should error if two parameters are not passed', () => {		
			assert.throws( () => { removeToy('gi joe') } )
		})
	});

	describe('gimmeTheLoot', () => {
		
	})
});
