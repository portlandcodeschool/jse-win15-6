//---------------------------
//  2A
//---------------------------
// I was following the example at the end of 2/9 scratchpad and, to be honest, it works but I don't really know what's going on in the subclass functions starting at var proto.

var Animal = (function () {
	function Animal(name) {
		this.name = name;
		this.layEgg = function() {
			return (new Egg());
		};
	}

	Animal.prototype.move = function () {
		return 'walk';
	}


	return Animal;
})();

var Bird = (function (Super) {
	function Bird(name) {
		Super.call(this,name);
	}

	var proto = new Super([]);
	Bird.prototype = proto;
	proto.constructor = Bird;
	proto.move = function() {
		return 'fly'
	}
	proto.hasWings = true;

	return Bird;

})(Animal);

var Fish = (function (Super) {
	function Fish(name) {
		Super.call(this,name);
	}

	var proto = new Super([]);
	Fish.prototype = proto;
	proto.constructor = Fish;
	proto.move = function() {
		return 'swim'
	}

	return Fish;

})(Animal);

var Penguin = (function (Super) {
	function Penguin(name) {
		Super.call(this,name);
	}

	var proto = new Super([]);
	Penguin.prototype = proto;
	proto.constructor = Penguin;
	proto.move = function() {
		return 'swim'
	}

	return Penguin;

})(Bird);

var simba = new Animal("Simba");
var nemo = new Fish("Nemo");
var lulu = new Bird("Lulu");
var pengo = new Penguin("Pengo");

simba.move();
nemo.move();
lulu.move();
pengo.name;     // "Pengo"
pengo.move();   //'swim'
pengo.hasWings; //true;
pengo instanceof Penguin; //true
pengo instanceof Bird;    //true
pengo instanceof Animal;  //true



//---------------------------
//  2B
//---------------------------

var Egg = (function () {
	function Egg() {
		this.hatch = function (name) {
			return (new this.__proto__.constructor(name));
		};
	}
	return Egg;
})();