console.log("Beginning of Question 3, card constructor redux")

var Card = (function(){

	function Card(id){
		this.id = id;
	}

	var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                        'Jack','Queen','King'];

	var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

	var fullSet = [];

	Card.prototype.rank = function(){
		return Math.floor(this.id/4)+1;
	}

	Card.prototype.suit = function(){
		return (this.id%4)+1;
	}

	Card.prototype.color = function(){
        var suit=this.suit();
        return suit && ((suit<3)? "red": "black"); 
	}

	Card.prototype.cardName = function(){
        var rank = this.rank();
        var suit = this.suit();
        return rank && suit && (rankNames[rank]+' of '+suitNames[suit]);
	}

	Card.prototype.isValid = function(num){ // Returns--> true, false
        return ((typeof num)==="number") //correct type
                && (num%1 === 0)        //integer
                && num>=0 && num<=51;   //in range
	}

	Card.isCard = function(card){
            return card
            && (typeof card === 'object') // check for null or primitive
            && (card.name === Card.cardName) // check at least one method
            && ('id' in card) && Card.isValidID(card.id); //check id
			}

	Card.fullSet = function(){
		return fullSet.slice(0);
	}

	Card.rankNames = function(){
		return rankNames.slice(0);
	}

	Card.suitNames = function() {
		return suitNames.slice(0);
	}

	Card.numCards = function() {
			return 52;
			}
	
/*
	Card.rankNames = function(){
		return /*splice['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                        'Jack','Queen','King']
	}

	Card.suitNames = function(){
		return /*splice['Hearts','Diamonds','Spades','Clubs'];
	}
*/

	return Card;

})();

var card1 = new Card(1);
console.log(card1);
console.log(card1.cardName());

console.log('Begin Question 3, Part B: Tarot Turtles');

var tarotCard = (function(){
	var tarotCard = function(id){
		this.id = id;

	}
	tarotCard.prototype = new Card();
	tarotCard.prototype.constructor = tarotCard;
	tarotCard.prototype.color = undefined;

	var rankNames =	['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                        'Page', 'Knight','Queen','King'];
	var suitNames = ['', 'Cups', 'Pentacles', 'Swords', 'Wands']

	return tarotCard;

})();

var card2 = new tarotCard(2);
console.log(card2);
var card56 = new tarotCard(56);
console.log(card56);
var card34 = new tarotCard(34);
console.log(card34);
var card45 = new tarotCard(45);
console.log(card45);
var card17 = new tarotCard(17);
console.log(card17);