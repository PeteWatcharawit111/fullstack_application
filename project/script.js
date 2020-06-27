// cat.js

// constructor function for the Cat class
//function Cat(name) {
//    this.age = 0;
//    this.name = name;
//}

var Cat = function(name) {
	this.age = 0;
	this.name = name;
}

Cat.prototype.connect = function() {
	console.log(this.name);
}
 
// now we export the class, so other modules can create Cat objects
module.exports = {
    Cat: Cat
}

