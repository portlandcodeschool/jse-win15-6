/* Question 2 */

/* part a */

function Animal(name) {
	this.name = name;
	};
	
	//every subclass needs to inherit move
	Animal.prototype.move = function(){return 'walk';};
	Animal.prototype.layEgg = function(){
		//new egg instance
	};
	
		

	//subclass of animal. needs to inherit name
	function Bird(name) {
		Animal.call(this, name);
		this.name = name;
		this.canFly = true;
		this.hasWings = true;
		this.move = function() {
				return 'fly';
			}
		};
	
	Bird.prototype = new Animal(); 
	Bird.prototype.constructor = Bird;
	
				
			//sub class of bird
			function Penguin(name) {
			this.name = name;
			Bird.call(this, name);
			this.canFly = false;
			this.move = function() {
				return 'swim';
				}
			}
		Penguin.prototype = new Bird();		
		Penguin.prototype.constructor = Penguin;

	//subclass of animal
	function Fish(name) {
	Animal.call(this);
	this.name = name;
		this.move = function() { 
			return 'swim';
			}
	};
	
	Fish.prototype = new Animal();
	Fish.prototype.constructor = Fish;

/* b */

function Egg() {
	this.hatch = function(name) {
		return new instance with name of baby should be same species as parent
	};
}

Egg.prototype.constructor = Egg;
