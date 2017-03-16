const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loot_data.sqlite');
const { addToy, addTest } = require('./addToy.js')
const { removeToy } = require('./removeToy.js')
const { listChildren } = require('../lib/listChildren.js')
const { listToys } = require('../lib/listToys.js')
const { setDelivered } = require('../lib/setDelivered.js')

module.exports.gimmeTheLoot = (arg1, arg2, arg3) => {
	switch (arg1) {
	  case 'add':
	    addToy(arg2, arg3)
	    break
	  case 'remove':
	   	removeToy(arg3, arg2)
	   	break
	  case 'ls': 
	  	if(arg2) {
	  		listToys(arg2)
	  			.then((toys) => {
	  				toys.forEach((toy) => {
	  					console.log(toy)
	  				})
	  			})
	  	} else {
	  		listChildren()
	  			.then((children) => {
	  				children.forEach((child) => {
	  					console.log(child)
	  				})
	  			})
	  	}
	  	break
	  case 'delivered': 
	  	setDelivered(arg2)
	}
}











// listChildren()
// addToy('Bike', 'Suzie')
// addTest()
// db.run('CREATE TABLE IF NOT EXISTS kids (Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Toy TEXT, Delivered INT)');

// db.run('DROP TABLE kids')
