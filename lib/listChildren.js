const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot_data.sqlite');

const listChildren = () => {
	let nameArray = []
	return new Promise ((resolve, reject) => {
		db.all('SELECT Name FROM kids', (err, names) => {
			let str = Object.values(names)
			resolve(str)
		})
	})
}

module.exports.listChildren = listChildren
