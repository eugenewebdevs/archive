var DBMigrate = require('db-migrate');
var assert = require('assert');

//getting an instance of dbmigrate
var dbmigrate = DBMigrate.getInstance(true);

//execute any of the API methods
dbmigrate.up();
