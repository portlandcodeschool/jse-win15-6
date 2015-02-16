var MemoryGame = (function() {
	function Ctor(cardset) {
		//...


		this.reset = function() {
			console.log(cardset.values().length);
			for (i = 0; i < cardset.values().length; i++){
				console.log(cardset.values()[i]);
				cardset.values()[i].faceup = false;}
				console.log(cardset.values()[i]);
		}
		
		this.faceupValue = function() {                         //maybe better as for each?
        var counter = 0;
        for (i = 0; i < cardset.values().length; i++)
                if (cardset.values()[i].faceup === true){
                        return cardset.values()[i]
                } else if (cardset.values()[i].faceup !== true){
                        counter += 1};
                if (counter = (cardset.values().length + 1)){
                        return 'No cards face up!'};
		}
		this.faceupValue = function() {

		}
		this.remaining = function() {

		}
		this.lift = function(where) {
			if (cardset[where].faceup === false){
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