
function Animal(name){
	this.name = name;
	this.ambulance = 'walk';
	Animal.prototype.move = function(){
		return this.ambulance;
	}

	Animal.prototype.layEgg = function(){
		var egg = new Egg(this.constructor);
		return egg
	}
}

function Egg(Mom){
	this.hatch = function(name){
		var hatchling = new Mom(name);
		return hatchling
	}
};



/////////////////////

function Bird(name){
	Animal.call(this, name);
	this.ambulance = 'fly';
	this.hasWings = true;
};

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
/////////////////////

function Fish(name){
	Animal.call(this, name);
	this.ambulance = 'swim'
};

Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;
/////////////////////

function Penguin(name){
	Bird.call(this, name);
	this.ambulance = new Fish().ambulance;

}

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

console.log(new Animal("Simba").move());// 'walk'
console.log(new Fish("Nemo").move());// 'swim'
console.log(new Bird("Lulu").move());// 'fly'
var pengo = new Penguin("Pengo");
console.log(pengo.name);     // "Pengo"
console.log(pengo.move());   //'swim'
console.log(pengo.hasWings); //true;
console.log(pengo instanceof Penguin); //true
console.log(pengo instanceof Bird);    //true
console.log(pengo instanceof Animal);  //true


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

