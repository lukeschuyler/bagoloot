const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot_data.sqlite');

const removeToy = (toy, kid) => {
	if (!kid) {
		throw Error ("Must include a child's name to remove from bag!")
	} else {
		db.run(`DELETE FROM kids WHERE Name = "${kid}" AND Toy = "${toy}"`)
	}
}

module.exports.removeToy = removeToy;
