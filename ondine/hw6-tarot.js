// This IIFE will define a superclass:
var Card = (function(){
	//if (!isValid(id))
	//	return null;

	function Card(id) {
		this.id = id;
	}

	// Instance methods (attach these to Card's prototype):
	Card.prototype.rank = function() {
		return Math.floor(this.id/4)+1;
	};

	Card.prototype.suit = function() {
    return (this.id%4)+1;
  };

	Card.prototype.name = function() {
		var rankVal = this.rank();
    var suitVal = this.suit();
      return rankVal && suitVal &&
          (this.constructor.rankNames()[rankVal]+' of '+this.constructor.suitNames()[suitVal]);
	};

	Card.prototype.color = function() {
		var suitVal = this.suit();
		  return suitVal && ((suitVal<3)? "red": "black");
	};
  
  console.log("Do not understand how to link this to prototype & then use it in Card.isCard without saving it as a variable")

	Card.prototype.isValid = function(num) {
    return ((typeof num)==="number") && 
             (num%1 === 0) && 
             num>=0 && num<=51;
  };
	
	// Private data:

	var rankNames = ['', 'Ace','Two','Three','Four','Five','Six','Seven',
                        'Eight','Nine','Ten','Jack','Queen','King'];
	var suitNames = ['', 'Hearts','Diamonds','Spades','Clubs'];

	var fullSet = [];
	// loop to fill fullSet with 52 instances...
	for (var id=0; id<52; ++id) {
        fullSet.push(Card(id));
    }

	// Class methods:

	Card.isCard = function(card) {// return Boolean
		return card 
						&& (typeof card === 'object') // check for null or primitive
						&& (card.name === Card.name) // check at least one method
      			//&& ('id' in card) && Card.isValid(card.id); // check id
	};

	Card.fullSet = function() {//return copy of private array
		return fullSet.slice(); 
	};

	Card.rankNames = function() {
		return rankNames.slice(); 
	};

	Card.suitNames = function() {
		return suitNames.slice();
	};

	Card.numCards = function() {
		return 52;
	};

	// Return constructor:
	return Card;

})(); //end superclass IIFE




// This IIFE will create a subclass (constructor TarotCard) of a superclass (constructor Card)
var TarotCard = (function(){ //<-- Superclass is parameter, but equals Card

	// Create subclass constructor:
	function Ctor(id) {
		Card.call(this,id); // call superclass ctor first
		this.upright = true; // then add subclass-specific properties
	}
	Ctor.isCard = Card.isCard; //share one superclass method

	// Override some other superclass methods and resources:

	var suitNames = ['', "Cups","Pentacles","Swords","Wands"];
	var rankNames = ['', 'One','Two','Three','Four','Five','Six','Seven',
                        'Eight','Nine','Ten','Page', 'Knight','Queen','King'];

	Ctor.rankNames = function() {
		return rankNames.slice();
	};

	Ctor.suitNames = function() {
		return suitNames.slice();
	};

	Ctor.numCards = function() {
		return 56;
	};

	// Replace default prototype so that subclass inherits from superclass Card
	var proto = (Ctor.prototype = Object.create(Card.prototype));
	proto.constructor = Ctor;

	// Disable one superclass instance method:
	proto.color = undefined; //Tarot cards have no color; disable inherited method

	return Ctor; //== TarotCard
})(); // end subclass IIFE


// ====================
// Testing suite as before...
// ====================

function assert(claim,message) {
    if (!claim) console.error(message);
}

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
assert(Card.isCard(card0),  "Test 21 failed"); // false
assert(Card.isCard(card51), "Test 22 failed"); // false
assert(!Card.isCard(0),     "Test 23 failed"); // true
assert(!Card.isCard({}),    "Test 24 failed"); // true
assert(!Card.isCard(card52),"Test 25 failed"); // true

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
assert(TarotCard.isCard(tarot0),  "Test 71 failed"); // false
assert(TarotCard.isCard(tarot55), "Test 72 failed"); // false
assert(!TarotCard.isCard(0),     "Test 73 failed"); // true
assert(!TarotCard.isCard({}),    "Test 74 failed"); // true
assert(!TarotCard.isCard(tarot56),"Test 75 failed"); // true
