/* Question 2 */

function Animal() {
	this.move = function(){
		return 'walk';

	};
	//every subclass needs to inherett move
}

	//subclass of animal
	function Bird() {
		Animal.call(this);
		canFly = true;
		//some sort of if statement? look in Headfirst JS book
		move() should return fly
		hasWings = true;
	}

	
	//subclass of animal
	function Fish() {
		move() return swim
	}
	
	
//sub class of bird
	function Penguin () {
		cannot fly
		move() return swim?
	}

