const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot_data.sqlite');
const { addToy, addTest } = require('./addToy.js')
const { removeToy } = require('./removeToy.js')
const { listChildren } = require('../lib/listChildren.js')
const { setDelivered } = require('../lib/setDelivered.js')



const gimmeTheLoot = (toy, kid, boolian) => {
	
}

// listChildren()
// addToy('GI JOE', 'Timmy')
// addTest()
// db.run('CREATE TABLE IF NOT EXISTS kids (Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Toy TEXT, Delivered INT)');

// db.run('DROP TABLE kids')
