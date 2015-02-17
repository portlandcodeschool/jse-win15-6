var MemoryGame = (function() {
	function Game(cardset) {
		//...array holding card values
		this.cards = cardset.values();

		this.cards.shuffle();
		this.facedowns = [];		// array to see if it's up or down
		for (var i=0; i<this.cards.length; i++){
			this.facedowns.push(1)	// 1 means card is there and it"s face down
		}
		
		// where = function(){

		// }

		remaining = function{
			var where = [];
			for (var i=0; i<this.cards.length; i++){
				if (this.facedowns[i] === 1){	// wherever the value is one, so it's face down
					where.push(i)		// new array, put the position in it.
				}						// this facedown is a property, not var, has to be prefixed with an object
			}
			return where;
		}




		this.reset = function() {

		}
		this.faceupWhere = function() {

		}
		this.faceupValue = function() {

		}
		this.remaining = function() {

		}
		this.lift = function() {

		}

	}
	//...

	return Ctor;
})();

var cardset = new MemoryCards(); // run the MemoryCards cunstructor in the other file to create the cardset
var game = new MemoryGame(cardset)