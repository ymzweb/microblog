var util = require('util');
var settings = require('../settings'),
    mongodb = require('mongodb'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').CoreConnection,
    Server = require('mongodb').Server;

// console.log(Connection);


module.exports = new Db(settings.db, new Server(settings.host, 27017, {}), { safe: true });