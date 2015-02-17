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
			board.forEach(function (x){  if (x[1]) { return x[0]; } });
			return false;
		}
		this.faceupValue = function() {

		}
		this.remaining = function() {

		}
		this.lift = function() {

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