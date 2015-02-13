/* Question 2 */

function Animal(name) {
	this.name = name;
	};
	
	//every subclass needs to inheret move

	Animal.prototype.move = function(){return 'walk';};
	
		Bird.prototype = Object.create(Animal.prototype);		
		//Bird.prototype.constructor = Bird;

	//subclass of animal
	function Bird() {
		this.name = name;
		Animal.call(this);
		canFly = true;
		//some sort of if statement? look in Headfirst JS book
		hasWings = true;
		this.move = function() {
		 	if(hasWings == true){
		 		return 'fly';
			}
		};
	}
		

				
			//sub class of bird
			function Penguin () {
			Bird.call(this);
			this.move = function() {
				return 'swim';
				}
			}
		Penguin.prototype = Object.create(Bird.prototype);		
		Penguin.prototype = new Bird();
		Penguin.prototype.constructor = Penguin;

	//subclass of animal
	function Fish() {
	Animal.call(this);
		this.move = function() { 
			return 'swim';
			}
	};
	
	Fish.prototype = Object.create(Animal.prototype);

