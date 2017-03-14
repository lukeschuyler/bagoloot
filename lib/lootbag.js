const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot_data.sqlite')

let list = []

const addToy = (toy, kid, arr) => {
	if(!kid) { throw Error ('Must pass a toy and name!') }
	arr.push({ toy, kid })
}

const removeToy = (kid, toy, arr) => {
	const item = { kid, toy }
	arr.splice(arr.indexOf(item), 1)
}

module.exports.addToy = addToy
module.exports.removeToy = removeToy
