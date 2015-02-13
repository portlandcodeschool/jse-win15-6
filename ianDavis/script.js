//1a
var Ctor = (function(){
		function Ctor (a,b) {
		this.a = 0;
		this.b = 1;
	}
	return Ctor;
})()

var obj1 = new Ctor();
var obj2 = new Ctor();
var obj3 = {};
Ctor.call(obj3);
obj3.c = 2;
//obj2.c = undefined because the 'c' property was added to the obj3 instance, not the prototype.
obj1.prototype.d = 3;
obj1.constructor.prototype.d = 3;
//What are the values of obj1.d, obj2.d, and obj3.d? Can you explain the results?
// All of these values are 3 because adding a property for a prototype of a constructor retroactively gives access to this property to all instances.
//1b

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();
//2

var Animal = (function(){
	function Animal(){
		Animal.prototype.move = function(){
			return "walk";
		}
		Animal.prototype.look = function(){
			return "watch out";
		}	
	}
	return Animal;
})();

var Bird = (function(){
	function Bird(){
		Bird.prototype.move = function(){
			return "fly";
		}
		Bird.prototype.whatami = function(){
			return "I am a bird!";
		}
	}
	Bird.prototype = new Animal();
	Bird.prototype.constructor = Bird;
	return Bird;
})();

var Fish = (function(){
	function Fish(){
		Fish.prototype.move = function(){
			return "swim";
		}
	}
	Fish.prototype = new Animal();
	Fish.prototype.constructor = Fish;
	return Fish;
})();


var Penguin = (function(){
	function Penguin(){
		Penguin.prototype.move = function(){
			return "swim";
		}
	}
	Penguin.prototype = new Bird();
	Penguin.prototype.constructor = Penguin;
	return Penguin;
})();
