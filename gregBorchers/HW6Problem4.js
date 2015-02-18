var MemoryGame = (function() {

	function Ctor(cardset) {
		var slots, //values of shuffled cards;
				//sparse array: will have elements deleted as cards are removed
			length,//total slots, including gaps
			there; //position of face-up card if any, or false

		// Helper functions which need access to closure vars;
		//  some fns will be made public as instance methods:
		var reset = function() {
			slots = cardset.values();
			length = slots.length;
			there = false;
			shuffle(slots);
		};
		reset();// reset now as part of init'ing

		var remainsAt = function(where) {//--> boolean
			return slots[where]!==undefined;
		};
		var valueAt = function(where) {//--> card val
			return slots[where];
		};
		var removeAt = function(where) {
			delete slots[where];
		};
		var faceupValue = function() {//--> card val
			return valueAt(there);
		};
		var faceupWhere = function() {//--> integer
			return there;
		};
		var remaining = function() {//--> array of integers
			return Object.keys(slots).map(Number);
		};

		var lift = function(here) {//--> display string
			if (!isValid(here,length)) return false;
			if (!remainsAt(here)) return false;
			if (there===here) return false;

			// must be a face-down card here; proceed...
			var valHere = valueAt(here);
			if (there === false) {
				// no current face-up
				there = here; //turn here face-up
			} else {
				// check match with face-up
				if (cardset.match(valHere,valueAt(there))) {
					// match; remove both:
					removeAt(here);
					removeAt(there);
					//optional: report match
					console.log("Match!");
				}
				//either way, turn face-up to face-down:
				there = false;
			}
			return cardset.display(valHere); 
		};

		// Make some functions public as instance methods:
		this.reset = reset;
		this.lift = lift;
		this.faceupValue = faceupValue;
		this.faceupWhere = faceupWhere;
		this.remaining = remaining;
	}//end ctor

	// Private Functions shared by all boards:
	// these could be placed inside ctor,
	// but then they would be rebuilt for each instance
	function isValid(where,length) {
			return (typeof where === 'number')
				&& (where%1 === 0)
				&& (where>=0)
				&& (where<length)
		}

	function shuffle(array) {
	// Knuth-Fisher-Yates, modified from http://bost.ocks.org/mike/shuffle/
		var end = array.length, temp, i;
  			// While there remain elements to shuffle…
		while (end>1) {
   			// Pick a remaining element…
   			i = Math.floor(Math.random() * end--);
   			// And swap it with the current element.
   			temp = array[end];
   			array[end] = array[i];
		    array[i] = temp;
 		}
	}

	return Ctor;
})();

//_______________________________________ CARD SETS
/**
values(): 
return an array of all the card values in the set. 
Each value could be either an object or a primitive, 
depending on how you choose to implement your cards.

match(valA,valB): 
given card values valA and valB 
(both of which should be found in values()), 
return true if they match as a pair, or false otherwise.

display(val): 
given card value val, return a string which 
represents that card. If your card values are already strings, 
this method could merely return val, but if your card values 
are objects, you'll need to generate a string version 
(e.g. the name() or shortName() of playing-card objects)
*/
// ----Example set 1:----

var FoodCards = (function() {
	// card values:
	var food = ['apple','artichoke','banana','blueberry','carrot','cranberry'];

	function Ctor() {
		this.values = function() {
			return food.slice(); //return copy of values
		};
		this.match = function(str1,str2) {
			return str1[0]===str2[0]; //match if same initial letter
		};
		this.display = function(val) {
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

	function Ctor() {
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

