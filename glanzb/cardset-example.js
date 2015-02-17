
// ----Example set 1:----

var FoodCards = (function() {
	// card values:
	var food = ['apple','artichoke','banana','blueberry','carrot','cranberry'];
		// card values, array of string, only first letters need to match
	function Ctor() {
		this.values = function() {
			return food.slice(); //return copy of values, so we don't mess up the original
		};
		this.match = function(str1,str2) {
			return str1[0]===str2[0]; //match if same initial letter
		};
		this.display = function(val) {	// string, in this case it's given, no need to convert
			return val; //display value is just card val
		};
	}

	return Ctor;

})();


// ----Example set 2:----

var AnimalCards = (function() {

	// card values (each card is a pair, array [name,num]) :
	var animals = [	['dog',1],['puppy',1],
					['cat',2],['kitten',2],
					['frog',3],['tadpole',3],
					['bird',4],['chick',4] ];

	function Ctor() {		// compaire val of position 1, display val of position 0
		this.values = function() {
			return animals.slice();
		};
		this.match = function(pair1,pair2) {  //each pair is [name,num] 
			return (pair1[1]===pair2[1]); // check if num matches
		};
		this.display = function(val) { //val is pair [name,num]
			return val[0];  //display just the animal name
		};
	}

	return Ctor;

})();

var cards = new AnimalCards();
cards
cards.values()
var card0 = cards.values()[0]
card0
cards.display(card0)

