
/**
2) Imaginary Menagerie** _[15%]_

**a)** Implement a simple taxonomy of four related classes, using a constructor for each:

- _Animal_: every instance of an Animal should inherit a method called _move()_.  
For basic animals, this just returns the string "walk".

- _Bird_: A subclass of Animal.  
Every Bird instance should return "fly" instead of "walk" when asked to _move()_.  
All Birds also have a property _hasWings_ which is true.

- _Fish_: Another subclass of Animal.  
A Fish instance will "swim" instead of "walk".

- _Penguin_: A subclass of Bird.  
Penguins cannot fly and they should move like Fish.

Every instance of Animal and its subclasses should also have a 
personal _name_ property which is not inherited.  
It should be set only within the constructor Animal, 
and each subclass should each ensure that its own constructor calls its 
superclass constructor as an initializer.

You should see these behaviors:
```
*/

//_________________________________________________________________ ANIMAL
// 
var Animal = (function() {
	function Animal(name) {
		this.name = name;
	}

	Animal.prototype.move = function() {
		return 'move';
	};

	Animal.prototype.layEgg = function() {
		return new Egg(this.constructor);
	};
		
	return Animal;

})();


//_________________________________________________________________ FISH
// 

//Ctor.prototype = new Rect();
	//Ctor.prototype.constructor = Ctor;
var Fish = (function() {
    function Fish(name) {
    	// this.prototype = new Animal();
        Animal.call(this, name);
    }

    Fish.prototype = new Animal();
	Fish.prototype.constructor = Animal;


    Fish.prototype.move = function() {
        return 'swim';
    };

    return Fish;

})();


//_________________________________________________________________ BIRD
// 
var Bird = (function() {
	function Bird(name) {
		// this.prototype = new Animal();
		Animal.call(this, name);  // get name property from Animal parent class
		this.hasWings = true;
	}

	Bird.prototype = new Animal();
	Bird.prototype.constructor = Animal;

	Bird.prototype.move = function() {
		return 'fly';
	};
		
	return Bird;

})();


//_________________________________________________________________ PENGUIN
// 
var Penguin = (function() {
	function Penguin(name) {
		Bird.call(this, name); // call the parent class to get both hasWings and (indirectly) name properties
	}

	Penguin.prototype = new Bird();
	Penguin.prototype.constructor = Bird;

	Penguin.prototype.move = function() {
		return Fish.prototype.move();
	};
	// Penguin moves like a fish, so no move method here
	// Penguin.prototype.move = function() {
	// 	return 'swim';
	// };
		
	return Penguin;

})();

//_________________________________________________________________ TESTING for 2a
// 
// Simple Testing suite
// Supplement as needed!
function assert(claim, message) {
    if (!claim) console.error(message);
}

console.log("\n--- START of Simba testing-----");

var simba = new Animal("Simba")
console.log(simba);
console.log(simba.move());
console.log(simba.hasWings);
console.log(simba instanceof Animal);
console.log(simba instanceof Bird);
console.log(simba instanceof Penguin );
console.log(simba instanceof Fish);

console.log("\n--- START of Nemo testing-----");
var nemo = new Fish("Nemo");
console.log(nemo);
console.log(nemo.move());
console.log(nemo.hasWings);
console.log(nemo instanceof Animal);
console.log(nemo instanceof Bird);
console.log(nemo instanceof Penguin);
console.log(nemo instanceof Fish);

console.log("\n--- START of Lulu testing-----");
var birdo = new Bird("Lulu");
console.log(birdo);
console.log(birdo.move());
console.log(birdo.hasWings);
console.log(birdo instanceof Animal);
console.log(birdo instanceof Bird);
console.log(birdo instanceof Penguin);
console.log(birdo instanceof Fish);

console.log("\n--- START of Pengo testing-----");
var pengo = new Penguin("Pengo");
console.log(pengo);
console.log(pengo.move());
console.log(pengo.hasWings);
console.log(pengo instanceof Animal);
console.log(pengo instanceof Bird);
console.log(pengo instanceof Penguin);
console.log(pengo instanceof Fish);

assert( pengo.name === 'Pengo', "pengo.name FAIL");
assert ( pengo.move() === 'swim', 'pengo.swim FAIL');
assert ( pengo.hasWings === true, 'pengo.hasWings FAIL');
assert ( pengo instanceof Penguin === true, 'FAIL pengo instanceof Penguin');
assert ( pengo instanceof Animal === true, 'FAIL pengo instanceof Animal');
assert ( pengo instanceof Bird ===  true, 'FAIL pengo instanceof Bird');

/**
b)** Create a class _Egg_, whose instances have one method, _hatch(name)_, 
  which returns a new instance (named _name_) of the same species which laid the egg.
Assume that every Animal can lay an egg with an instance method _layEgg()_ 
  which creates a new Egg instance.
Try to solve this without subclassing Egg and 
  without implementing _layEgg_ and _hatch_ more than once.
*/

//_________________________________________________________________ EGG
// 
var Egg = (function() {
	function Egg(speciesConstructor) {
		this.eggHatchConstructor = speciesConstructor;

	}
	
	Egg.prototype.hatch = function(babyName) {
		// TOFIX this does not fully populate the prototype chain, although the Ctor seems correct.. ?
		return new this.eggHatchConstructor(babyName);
	};
		
	return Egg;

})();


//_________________________________________________________________ TESTING for 2b
// 

function assert(claim, message) {
    if (!claim) console.error(message);
}

console.log("\n--- START of Pengo+Penglet Egg testing-----");

var pengo = new Penguin("Pengo");
var egg = pengo.layEgg();
//egg.constructor === Egg; //true
var baby = egg.hatch("Penglet");
//baby instanceof Penguin; //true

console.log("Penglet obj returns " + baby);
assert ( egg.constructor === Egg, 'FAIL egg constructor === Egg');
assert( pengo.name === 'Pengo', "pengo.name FAIL");
assert( baby.name === 'Penglet', "baby.name FAIL");
assert ( baby.move() === 'swim', 'baby.swim FAIL');
assert ( baby.hasWings === true, 'baby.hasWings FAIL');
///assert ( baby instanceof Penguin === true, 'FAIL baby instanceof Penguin');
console.log("\n--- END of Pengo Egg testing-----\n");


console.log("\n--- START of Nemo+Nemolet Egg testing-----");

var nemo = new Fish("Nemo");
var egg = nemo.layEgg();
egg.constructor === Egg; //true
fishBaby = egg.hatch("Nemolet");
//fishBaby instanceof Penguin; //true

console.log("Nemolet obj returns " + fishBaby);
assert( nemo.name === 'Nemo', "nemo.name FAIL");
assert( fishBaby.name === 'Nemolet', "fishBaby.name FAIL");
assert ( fishBaby.move() === 'swim', 'fishBaby.swim FAIL');
assert ( fishBaby.hasWings === false, 'fishBaby.hasWings FAIL');
//assert ( fishBaby instanceof Fish  === true, 'FAIL baby instanceof Fish');
console.log("\n--- END of Nemo Egg testing-----\n");


