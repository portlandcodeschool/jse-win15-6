var MemoryGame = (function() {
	function Game(cardset) {
		//...
		this.cards = cardset.values(); //array holding card values

		this.reset = function() { //borrow from old homework!
			var toShuffle = this.cards;
  			var m = toShuffle.length, t, i;
  			// While there remain elements to shuffle…
  			while (m) {
		    // Pick a remaining element…
		    i = Math.floor(Math.random() * m--);
		    // And swap it with the current element.
		    t = toShuffle[m];
		    		    //PUT faceup value to no
		    t.faceUp = false;
		    toShuffle[m] = toShuffle[i];
		    toShuffle[i] = t;
  			}

  			return toShuffle;
		};
    
		this.faceupWhere = function() {
			for (var key in this.cards) {
				var toCheck = this.cards[key];
   					for (var prop in toCheck) {
   						if (toCheck.faceUp == 'false') {
   							console.log("This is face down");
   						}
   					}
   				
   			}
		};
		this.faceupValue = function() {

		};
		this.remaining = function() {

		};
		this.lift = function(where) {
			var cardToLift = this.cards[val];
			if (cardToLift.faceUp == false) {
				return cardset.display(where);
			} else {
				return false;
			}
		};

	}
	//...

	return Game;
})();


//Made in class
// var MemoryGame = (function() {
// 	function Game(cardset) {
// 		this.cards = cardset.values(); //array holding card values
	
// 		this.cards.shuffle();
// 		this.faceDown = [];



// 	}

// })()	



//these should go in a separate file. like main.js that way you can have multiple cardsets to play the game with
// var cardset = new MemoryCards();
// var game = new MemoryGame(cardset);
//End made in class