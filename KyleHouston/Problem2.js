var Animal = (function() {

	function Animal(name) {
		this.name = name;
	}

	Animal.prototype.move = function () {
		return "walk";
	}

	Animal.prototype.layEgg = function(){
		return new Egg(this);
	}
return Animal;
})();

var Fish = (function() {
	function Fish(name){
		this.name = name;	
	}

	Fish.prototype = new Animal();
  	Fish.prototype.constructor = Fish;
	Fish.prototype.move = function () {
		return "swim";
	};
return Fish;
})();

var Bird = (function() {
	function Bird(name) {
		this.name = name;	
	}

	Bird.prototype = new Animal();
	Bird.prototype.constructor = Bird;
	Bird.prototype.hasWings = true;
	Bird.prototype.move = function () {
		return "fly";
	}
return Bird;
})();

var Penguin = (function() {
  
	function Penguin(name) {
		this.name = name;
		}

		Penguin.prototype = new Bird();
		Penguin.prototype.move = Fish.prototype.move;
		Penguin.prototype.constructor = Penguin;

return Penguin;
})();

var Egg = (function() {
  
	function Egg(parent) {
		this.hatch = function(name) {
			return new parent.constructor(name);
		}
	}

return Egg;
})();


console.log(new Animal("Simba").move());// 'walk'
console.log(new Fish("Nemo").move());// 'swim'
console.log(new Bird("Lulu").move());// 'fly'
var pengo = new Penguin("Pengo");
var twoCan = new Bird("Sam");
console.log(pengo.name);     // "Pengo"
console.log(pengo.move());   //'swim'
console.log(pengo.hasWings); //true;
console.log(pengo instanceof Penguin); //true
console.log(pengo instanceof Bird); 	  //true
console.log(pengo instanceof Animal);  //true

console.log("<<<<<Egg tests>>>>>>>");
var pengo = new Penguin("Pengo");
var egg = pengo.layEgg();
console.log(egg.constructor === Egg); //true
var baby = egg.hatch("Penglet");
console.log(baby instanceof Penguin); //true

var nemo = new Fish("Nemo");
egg = nemo.layEgg();
console.log(egg.constructor === Egg); //true
baby = egg.hatch("Nemolet");
console.log(baby instanceof Fish); //true