var MemoryCards = (function() {
	
	var cards = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
	
	function Ctor() {
		//...
		this.values = function() {
			return cards.slice();
		}

		this.match = function(pair1,pair2) {  //each pair is [name,num] 
			return (pair1[1]===pair2[1]); // check if num matches
		}

		this.display = function(val) { //val is pair [name,num]
			return val[0];  //display just the animal name
		};
	}
	//...

	return Ctor;
})();

var cardset = new MemoryCards();