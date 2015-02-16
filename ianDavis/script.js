//1a
var Ctor = (function(){
		function Ctor (a,b) {
		this.a = 0;
		this.b = 1;
	}
	return Ctor;
})()

var obj1 = new Ctor();
var obj2 = new Ctor();
var obj3 = {};
Ctor.call(obj3);
obj3.c = 2;
//obj2.c = undefined because the 'c' property was added to the obj3 instance, not the prototype.
obj1.prototype.d = 3;
obj1.constructor.prototype.d = 3;
//What are the values of obj1.d, obj2.d, and obj3.d? Can you explain the results?
// All of these values are 3 because adding a property for a prototype of a constructor retroactively gives access to this property to all instances.
//1b

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();
//2

var Animal = (function(){
	function Animal(name){
		Animal.prototype.move = function(){
			return "walk";
		}
		this.name = name;
		
	}
	return Animal;
})();

var Bird = (function(){
	function Bird(){
		Bird.prototype.move = function(){
			return "fly";
		}
		Bird.prototype.whatami = function(){
			return "I am a bird!";
		}
	}
	Bird.prototype = new Animal();
	Bird.prototype.constructor = Bird;
	return Bird;
})();

var Fish = (function(){
	function Fish(){
		Fish.prototype.move = function(){
			return "swim";
		}
	}
	Fish.prototype = new Animal();
	Fish.prototype.constructor = Fish;
	return Fish;
})();


var Penguin = (function(){
	function Penguin(){
		Penguin.prototype.move = function(){
			return "swim";
		}
	}
	Penguin.prototype = new Bird();
	Penguin.prototype.constructor = Penguin;
	return Penguin;
})();


//b

//3
// This IIFE will define a superclass:
var Card = (function(){

	// Ctor:
	function Card(id) {
		this.id = id; 
	}


	// Instance methods (attach these to Card's prototype):
	Card.prototype.rank = function() { // --> 1..13, NaN
        return Math.floor(this.id/4)+1;
    };

    Card.prototype.suit = function() { // --> 1..4, NaN
        return (this.id%4)+1;
    };
   
    Card.prototype.color = function() { // -->"red,"black", NaN
        var suitVal=this.suit();
        return suitVal && ((suitVal<3)? "red": "black");
    };

    Card.prototype.name = function() { //--> string, NaN
        var rankVal = this.rank();
        var suitVal = this.suit();
        return rankVal && suitVal &&
            (rankNames[rankVal]+' of '+suitNames[suitVal]);
    };

    Card.prototype.isValidID = function(num) { // Returns--> true, false
        return ((typeof num)==="number") //correct type
                && (num%1 === 0)        //integer
                && num>=0 && num<=51;   //in range
    };

	// Private data:
	var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven',
                        'Eight','Nine','Ten','Jack','Queen','King'];
	var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];


	var fullSet = [];
	// loop to fill fullSet with 52 instances...
	for (var id=0; id<52; ++id) {
        Card.fullSet.push(Card(id));
    }


	// Class methods:

	Card.isCard = function(thing) {// return Boolean
		return card && (typeof card === 'object') 
            && (card.name === name)
            && ('id' in card) && isValidID(card.id); 
	}

	Card.fullSet = function() {//return copy of private array
		return fullSet.slice(); 
	}

	Card.rankNames = function() {
		return rankNames.slice(); 
	}

	Card.suitNames = function() {
		return suitNames.slice();
	}

	Card.numCards = function() {
		return 52;
	}


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

	var suitNames = ["Cups","Pentacles","Swords","Wands"];
	var rankNames = Card.rankNames(); // subclass ranks are derived from superclass Card,
	rankNames.splice(10,1,"Page","Knight"); // but Jack gets replaced w. Page+Knight

	Ctor.rankNames = function() {
		return rankNames.slice();
	}
	Ctor.suitNames = function() {
		return suitNames.slice();
	}
	Ctor.numCards = function() {
		return 56;
	}

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
assert(Card.isCard(card0),  "Test 21 failed");
assert(Card.isCard(card51), "Test 22 failed");
assert(!Card.isCard(0),     "Test 23 failed");
assert(!Card.isCard({}),    "Test 24 failed");
assert(!Card.isCard(card52),"Test 25 failed");

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

