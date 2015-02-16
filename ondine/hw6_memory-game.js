var MemoryGame = (function() {

	function Ctor(cardset) {
		this.cards = cards.values();
		this.cards.shuffle();
		this.facedowns = [];
			for (var i = 0; i < this.cards.length; ++i) {
				this.facedowns.push(1);
			}
		}


		this.reset = function() {

		};
		this.faceupWhere = function() {

		};
		this.faceupValue = function() {

		};
		this.remaining = function() {

		};
		this.lift = function() {

		};

		function shuffle() {
		// Knuth-Fisher-Yates, modified from http://bost.ocks.org/mike/shuffle/
			var end = cards.length, temp, i;
	  			// While there remain elements to shuffle…
			while (end > 1) {
	   			// Pick a remaining element…
	   			i = Math.floor(Math.random() * end--);
	   			// And swap it with the current element.
	   			temp = cards[end];
	   			cards[end] = cards[i];
			    cards[i] = temp;
	 		}
	 	}


	//...

	return Ctor;

})();



/*
To run the code:
var cards = new MemoryCards()
cards => returns functions

cards.values() => returns array

var card0 = cards.values()[0]
card0
cards.display(card0)


var cards = new MemoryCards(); // make instance of cardset
var game = new MemoryGame(cards); // feed it into instance of the game

*/