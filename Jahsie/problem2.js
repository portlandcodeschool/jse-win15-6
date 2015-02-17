// Problem 2a) Create four classes with a constructor for each

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

// Create a subclass
// Pattern to memorize:
// 1) rename the function, call the class (Animal)
function Bird(name) {
    Animal.call(this, name);
}
// 2) connect the prototype, 3) point constructor to itself
Bird.prototype = new Animal();
Bird.prototype.constructor = Bird;

// Change or add properties
Bird.prototype.move = function () {
    return 'fly';
};
Bird.prototype.hasWings = true;

function Fish(name) {
    Animal.call(this, name);
}

Fish.prototype = new Animal();
Fish.prototype.constructor = Fish;
Fish.prototype.move = function () {
    return 'swim';
};

function Penguin(name) {
    Bird.call(this, name);
}

Penguin.prototype = new Bird();
Penguin.prototype.constructor = Penguin;
Penguin.prototype.move = Fish.prototype.move;

// Testing:
var tiger = new Animal('Tig');
console.log(tiger.name);
console.log(tiger.move());
console.log(new Animal('Beechnut').move());

var eagle = new Bird('Harpy');
console.log(eagle.name);
console.log(eagle.move());

var pike = new Fish('Pike');
console.log(pike.name);
console.log(pike.move());

var pengo = new Penguin('Pengo');
console.log(pengo.name);
console.log((pengo.move()), "expect swim");
console.log((pengo.hasWings), "has wings");
console.log((pengo instanceof Penguin), "instanceof Penguin");
console.log((pengo instanceof Bird), "instanceof Bird");
console.log((pengo instanceof Animal), "instanceof Animal");


// ==========
// Problem 2b)
// Create a class Egg, whose instances have one method, hatch(name),
// which returns a new instance (named name) of the same species which laid the egg. 
// Assume that every Animal can lay an egg with an instance method layEgg() 
// which creates a new Egg instance. 
// Try to solve this without subclassing Egg and without implementing 
// layEgg and hatch more than once.

function Egg(mom) {
//  var momCategory = mom.constructor;
    this.hatch = function(name) {
    // return new momCategory(name + 'let');
        return new mom.constructor(name + 'let');
    };
}

console.log("=== Testing Egg constructor ===");

var pip = new Penguin('Pip');
console.log(pip.name);
var egg = pip.layEgg();
console.log((egg.constructor === Egg), "expect true");
var baby = egg.hatch('Pip');
console.log(baby.name);
console.log((baby instanceof Penguin), "expect true");

var pike = new Fish('Pike');
console.log(pike.name);
var egg = pike.layEgg();
console.log((egg.constructor === Egg), "expect true");
baby = egg.hatch('Pike');
console.log(baby.name);
console.log((baby instanceof Fish), "expect true");