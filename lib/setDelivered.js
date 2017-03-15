const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot_data.sqlite');

const setDelivered = (toy, kid) => {
	if (!kid || !toy) { throw Error ('You Must specify What toys were Delivered!') }
	db.run(`UPDATE kids
	SET Delivered = 1
	WHERE Name = "${kid}" 
	AND Toy = "${toy}"`)
	return `Thanks for the notification that ${kid}'s ${toy} has been delivered!`
}


module.exports.setDelivered = setDelivered;
