var assert = require('assert');
var db = require('../database.js');
var database = db.database;

describe('Database', function() {
	
	var mysql;
	beforeEach(function () {
	// runs before each test in this block
		mysql = new database();
	});

 	afterEach(function () {
    // runs after each test in this block
    	var table = "PERSON";
    	mysql.close();
	});

	describe('mysql connection', function () {
		it('should return connected message', function() {
			mysql.connect();
			
		});
	});

	describe('mysql create table', function() {
		it('should create a new table', function() {
			mysql.connect();
			var table = "PERSON";
			mysql.createTable(table);
		});
	});

	describe('mysql delete table', function() {
		it('should delete a table', function() {
			mysql.connect();
			var table = "PERSON";
			mysql.deleteTable(table);
		})
	});
});