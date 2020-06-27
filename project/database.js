var mysql = require('mysql');


var database = function () {
	this.db = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "s3cret",
		database: 'pete_database'
	});
}

database.prototype.connect = function() {
	this.db.connect(function(err) {
	 	if (err) { 
			return console.log('error:' + err.message);
		}	
		console.log("Connected to the database!");
	});
}

database.prototype.close = function() {
	this.db.end(function(err) {
		if (err) {
    		return console.log('error:' + err.message);
    	}
		console.log('Close the database connection.');
	});
}

database.prototype.createTable = function(table) {
	var query = "CREATE TABLE IF NOT EXISTS " + table + " (ID INT PRIMARY KEY NOT NULL, NAME TEXT NOT NULL)";
	this.db.query(query, function (err, result) {
		if (err) {
			//throw error;
			return console.log('error:' + err.message);
		}
    	console.log('Table created');
  	});
}

database.prototype.deleteTable = function(table) {
	var query = "DROP TABLE " + table;
	this.db.query(query, function (err, result) {
		if (err) {
			//throw error;
			return console.log('error:' + err.message);
		}
    	console.log('Table deleted');
  	});
}


module.exports = {
    database: database
}