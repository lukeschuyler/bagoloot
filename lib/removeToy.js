const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot_data.sqlite');

const removeToy = (kid, toy, arr) => {
	const item = { toy, kid }
}



module.exports.removeToy = removeToy;
