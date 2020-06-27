var assert = require('assert');
let cats = require('../script.js');
let Cat = cats.Cat;

describe('Database', function () {
	describe('mysql connection', function () {
		it('should return connected message', function () {
			let cat1 = new Cat("Manny");
			console.log(cat1.name);
			cat1.connect();
		});
	});
});