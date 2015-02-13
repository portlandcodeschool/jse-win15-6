//IFEE 

var Animal = (function() {
	//Constructor 
	function Animal(name){
		this.name = name; 

		Animal.prototype.move = function() {
			return "Walk";
			} 

			Animal.prototype.look = function() {
				return "Watch Out"
			}

	}

	return Animal;
})();

var Bird = (function() {
	function Bird(){
		Bird.prototype.move = function() {
			Animal.call(this,name);
			return "Fly";
		}
	}

	Bird.prototype = new Animal;
	Animal.prototype.constructor = Bird;

	return Bird;


})();

var Fish = (function(){
	function Fish(){
		Fish.prototype.move = function() {
			Animal.call(this,name);
			return "Swim";
		}
	}

		Fish.prototype = new Animal;
		Animal.prototype.constructor = Fish;

		return Fish;
	
})();

var Penguin = (function(){
	function Penguin(){
		Penguin.prototype.move = function(){
			Fish.call(this);
			// Penguin.protoype.move = Fish.prototype.move;
		}
	}

	Animal.prototype = new Animal;
	Fish.prototype.constructor = Penguin;

	return Penguin;


})();


