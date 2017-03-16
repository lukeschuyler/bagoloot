const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot_data.sqlite');

const setDelivered = (kid) => {
	if (!kid) { throw Error ('You Must specify What childs toys were Delivered!') }
	db.run(`UPDATE kids
	SET Delivered = 1
	WHERE Name = "${kid}"`)
}


module.exports.setDelivered = setDelivered;
