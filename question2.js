// Create the superclass with general properties
function Animal(name) {
    this.name = name;
}

// Create prototype with properties that will be changed
Animal.prototype.move = function() {
    return 'walk';
};

Animal.prototype.layEgg = function () {
    return new Egg(this);
}

// Bird //
function Bird(name) {
    Animal.call(this, name);
}

Bird.prototype = new Animal();
Bird.prototype.constructor = Bird;
Bird.prototype.move = function () {
    return 'fly';
};
Bird.prototype.hasWings = true;


// Fish //
function Fish(name) {
    Animal.call(this, name);
}

Fish.prototype = new Animal();
Fish.prototype.constructor = Fish;
Fish.prototype.move = function () {
    return 'swim';
};


// Penguin //
function Penguin(name) {
    Bird.call(this, name);
}

Penguin.prototype = new Bird();
Penguin.prototype.constructor = Penguin;
Penguin.prototype.move = Fish.prototype.move;

// Egg

function Egg(Species) { // var Species stores a Constructor
	this.hatch = function(name) {
		return new Species(name);
	}
}
// This will be applied retroactively to existing animals:
Animal.prototype.layEgg = function() {
	return new Egg(this.constructor);
}

// Testing:
var Simba = new Animal('Simba');

var Lulu = new Bird('Lulu');
console.log(Lulu.name);
console.log(Lulu.move());

var Nemo = new Fish('Nemo');
console.log(Nemo.name);
console.log(Nemo.move());

var pengo = new Penguin('Pengo');
console.log(pengo.name);
console.log((pengo.move()), "pengo is expect swim");
console.log((pengo.hasWings), "pengo has wings");
console.log((pengo instanceof Penguin), "pengo is instanceof Penguin");
console.log((pengo instanceof Bird), "pengo is instanceof Bird");
console.log((pengo instanceof Animal), "pengo is instanceof Animal");


new Animal("Simba").move();// 'walk' 
new Fish("Nemo").move();// 'swim' 
new Bird("Lulu").move();// 'fly' 
var pengo = new Penguin("Pengo"); 
pengo.name; // "Pengo" 
pengo.move(); //'swim' 
pengo.hasWings; //true; 
pengo instanceof Penguin; //true 
pengo instanceof Bird; //true 
pengo instanceof Animal; //true

var pengo = new Penguin("Pengo");
var egg = pengo.layEgg();
egg.constructor === Egg; //true
var baby = egg.hatch("Penglet");
baby instanceof Penguin; //true

var nemo = new Fish("Nemo");
egg = nemo.layEgg();
egg.constructor === Egg; //true
baby = egg.hatch("Nemolet");
baby instanceof Fish; //true