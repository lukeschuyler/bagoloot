const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot_data.sqlite');

const { addToy, addTest } = require('./addToy.js')
const { removeToy } = require('./removeToy.js')

addToy('Scooter', 'Timmy')
addTest()
// db.run('CREATE TABLE IF NOT EXISTS kids (Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT UNIQUE, Toy TEXT, Delivered INT)');

// db.run('DROP TABLE kids')
