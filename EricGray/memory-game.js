var MemoryGame = (function() {
	function Ctor(cardset) {
		//...


		this.reset = function() {
			for (i = [0]; i < cardset.values().length; i++)
				console.log(cardset.values().length);
				console.log(cardset.values()[i]);
				cardset.values()[i].faceup = false;
				console.log(cardset.values()[i]);
		}
		this.faceupWhere = function() {

		}
		this.faceupValue = function() {

		}
		this.remaining = function() {

		}
		this.lift = function(where) {
			if (cardset[where].faceup = false){
				return cardset[where].faceup = true
			} else {
				return 'Card is already faceup'
			};
		}

	}
	//...

	return Ctor;
})();

var game1 = new MemoryGame(heroesAndVillains);