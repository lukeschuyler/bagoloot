const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot_data.sqlite');

const addToy = (toy, kid) => {
	if(!kid || !toy) { throw Error ('Must pass a toy and name!') }
		new Promise((resolve, reject) => {
			resolve(db.run(`INSERT INTO kids VALUES (
				null,
				"${kid}",
				"${toy}",
				0)`))
		})
	.then(() => 'Toy added!')
}

const addTest = (name) => {
	return new Promise( (resolve, reject) => {
    db.get(`SELECT * FROM kids WHERE Name = '${name}'`, (err, kid) => {	
      resolve(kid);
    });
  });
}

module.exports.addToy = addToy;
module.exports.addTest = addTest;
