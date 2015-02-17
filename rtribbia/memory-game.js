var MemoryGame = (function() {
	function Ctor(cardset) {
		//...

		var cardset = new MemoryCards(cardset);

		var board = []; 

		for (var i = 0; i < cards.len(); i++) {
			board.push([i,0,0]); //cardset.index, faceup, removed
		}

		this.reset = function() {
			board.forEach(function (x){ x[1] = x[2] = 0;});
			shuffle();
		}

		this.faceupWhere = function() {
			var r = false;
			for (var i = 0; i < board.length; i++) {
				if (board[i][1]) { r = i; break; }
			}
			return r;

		}
		this.faceupValue = function() {
			var loc = this.faceupWhere();
			if (loc != false) { return cardset.display(board[loc][0]); }
		}
		this.remaining = function() {

		}
		this.lift = function(where) {
	
			return (board[where][1])?false:cardset.display(board[where][0])

		}

		this.showCards = function () {
			this.cardset.values().forEach(function (x){
				console.log(x.cardName());
			});
		}

		function shuffle() {
			var m = board.length, t, i;
			// While there remain elements to shuffle…
			while (m) {

				// Pick a remaining element…
				i = Math.floor(Math.random() * m--);

				// And swap it with the current element.
				t = board[m];
				board[m] = board[i];
				board[i] = t;
			}
		}

	}
	//...

	return Ctor;
})();

var game = new MemoryGame(Card.fullSet());