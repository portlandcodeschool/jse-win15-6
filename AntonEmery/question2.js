/* Question 2 */

function Animal() {
	};
	
	//every subclass needs to inheret move

	Animal.prototype.move = function(){return 'walk';};
	

	//subclass of animal
	function Bird() {
		Animal.call(this);
		canFly = true;
		//some sort of if statement? look in Headfirst JS book
		hasWings = true;
		this.move = function() {
			if(hasWings == true){
				return 'fly';
			}
		}
	}; 
		
	

	/*
	//subclass of animal
	function Fish() {
		move() return swim
	}
	
	
//sub class of bird
	function Penguin () {
		cannot fly
		move() return swim?
	}
*/
