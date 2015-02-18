console.log("Beginning of Question 3, card constructor redux")

var Card = (function(){

	function Card(id){
		this.id = id;
	}

	var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
                        'Jack','Queen','King'];

	var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

	var fullSet = [];

		for (var id=0; id<52; ++id) {
    		fullSet.push(new Card(id));
    }
	

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

	Card.prototype.name = function(){
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
            && (card.name === Card.name) // check at least one method
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


	return Card;

})();

function assert(claim,message) {
    if (!claim) console.error(message);
}
console.log('Testing Card')

// card instances needed for assertions:
var card0 = new Card(0);
var card3 = new Card(3);
var card5 = new Card(5);
var card51 = new Card(51);
var card52 = new Card(52); // invalid when tested

// Test instance methods:
assert(card0.rank()===1,  "Test 1 failed");
assert(card3.rank()===1,  "Test 2 failed");
assert(card51.rank()===13,"Test 3 failed");
assert(card0.suit()===1,  "Test 4 failed");
assert(card5.suit()===2,  "Test 5 failed");
assert(card51.suit()===4, "Test 6 failed");
assert(card0.color()==='red',   "Test 10 failed");
assert(card3.color()==='black', "Test 11 failed");
assert(card5.name()==='Two of Diamonds', "Test 12 failed");
assert(card51.name()==='King of Clubs',  "Test 13 failed");

assert(card0.isValid(),		"Test 15 failed");
assert(card51.isValid(),	"Test 16 failed");
assert(!card52.isValid(),	"Test 17 failed");

// Test Card.isCard:
assert(Card.isCard(card0),  "Test 21 failed");
assert(Card.isCard(card51), "Test 22 failed");
assert(!Card.isCard(0),     "Test 23 failed");
assert(!Card.isCard({}),    "Test 24 failed");
assert(!Card.isCard(card52),"Test 25 failed");

var card1 = new Card(1);
console.log(card1);
console.log(card1.name());

console.log('Begin Question 3, Part B: Tarot Turtle Time.');

var TarotCard = (function(){
	var TarotCard = function(id){
		this.id = id;
		//add functionality for which direction the card is facing//

	}
	TarotCard.prototype = new Card();
	TarotCard.prototype.constructor = TarotCard;
	TarotCard.prototype.color = undefined;

	var suitNames = ['Cups', 'Pentacles', 'Swords', 'Wands']
	var rankNames = Card.rankNames(); // subclass ranks are derived from superclass Card,
	rankNames.splice(10,1,"Page","Knight"); // but Jack gets replaced w. Page+Knight

	TarotCard.isCard = Card.isCard;

	TarotCard.rankNames = function() {
		return rankNames.slice();
	}
	TarotCard.suitNames = function() {
		return suitNames.slice();
	}
	TarotCard.numCards = function() {
		return 56;
	}
	TarotCard.prototype.name = function(){
        var rank = this.rank();
        var suit = this.suit();
        return rank && suit && (rankNames[rank]+' of '+suitNames[suit]);
	}

	return TarotCard;

})();

console.log('Testing tarot, small t');

// Now test Tarot cards!
var tarot0 = new TarotCard(0);
var tarot3 = new TarotCard(3);
var tarot5 = new TarotCard(5);
var tarot40 = new TarotCard(40);
var tarot46 = new TarotCard(46);
var tarot55 = new TarotCard(55);
var tarot56 = new TarotCard(56); // invalid when tested

// Test instance methods:
assert(tarot0.rank()===1,  "Test 51 failed");
assert(tarot3.rank()===1,  "Test 52 failed");
assert(tarot55.rank()===14,"Test 53 failed");
assert(tarot0.suit()===1,  "Test 54 failed");
assert(tarot5.suit()===2,  "Test 55 failed");
assert(tarot55.suit()===4, "Test 56 failed");
assert(!tarot0.color,   "Test 60 failed");

assert(tarot5.name()==='Two of Pentacles', 	"Test 61 failed");
assert(tarot40.name()==='Page of Cups',  	"Test 62 failed");
assert(tarot46.name()==='Knight of Swords', "Test 63 failed");
assert(tarot55.name()==='King of Wands',  	"Test 64 failed");

assert(tarot0.isValid(),	"Test 65 failed");
assert(tarot55.isValid(),	"Test 66 failed");
assert(!tarot56.isValid(),	"Test 67 failed");

// Test TarotCard.isCard:
assert(TarotCard.isCard(tarot0),  "Test 71 failed");
assert(TarotCard.isCard(tarot55), "Test 72 failed");
assert(!TarotCard.isCard(0),     "Test 73 failed");
assert(!TarotCard.isCard({}),    "Test 74 failed");
assert(!TarotCard.isCard(tarot56),"Test 75 failed");