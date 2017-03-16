const { gimmeTheLoot } = require('./lootbag')

let [,, ...args] = process.argv

gimmeTheLoot(args[0], args[1], args[2])
