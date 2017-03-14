const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot_data.sqlite');

const addToy = (toy, kid) => {
	if(!kid) { throw Error ('Must pass a toy and name!') }
		db.run(`INSERT INTO kids VALUES (
			null,
			"${kid}",
			"${toy}",
			0)`)
}

const addTest = () => {
	let data;
	return new Promise( (resolve, reject) => {
    db.get(`SELECT * FROM kids WHERE Name = 'Timmy'`, (err, kid) => {	
      resolve(kid);
    });
  });
}

module.exports.addToy = addToy;
module.exports.addTest = addTest;
