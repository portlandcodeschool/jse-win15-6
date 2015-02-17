/*First make a constructor named _Ctor_ for an object that has properties _a_ and _b_ and initializes them to 0 and 1 respectively.
-   Now, make two objects named _obj1_ and _obj2_ using _Ctor_.
-   Now make a new object _obj3_ this way:
    ```
    var obj3 = {};
    Ctor.call(obj3);
    ```

    and check its properties.
-   Next, add a property _c_ to _obj1_ with a value of 2.  What will be the value of _obj2.c_?
-   Now, add a property _d_ with the value 3 to _obj1_'s "proto" (the object which helps out when _obj1_ can't do something by itself).  Remember that there are at least four ways of referring to that proto object.
-   What are the values of _obj1.d_, _obj2.d_, and _obj3.d_? Can you explain the results?
*/

//1a
function Ctor() {
	this.a = 0,
	this.b = 1
}

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3);

obj3 //Object { a=0, b=1}

obj1.c = 2;
obj1.constructor.prototype.d = 3;
obj1.d; //3
obj2.d; //3
obj3.d; //undefined

console.log('1a: obj3 is undefined because "new"
was not used and therefore it is not linked to Ctor.prototype');

//1b
//function A() {};
//set default values for instances of A:
/*A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();*/

//There is a difference between the behaviors of 
//`objA` and `objB`!  Explain.

console.log('1b: The difference is see is that when \
	displaying the value for "A", the output is displayed
	as an object, whereas "B" displayed the content of the string')


//2a
//2a
function Animal(name) {
  this.name = name;
}
	Animal.prototype.move = function () {
		console.log('Walk');
	}
	Animal.prototype.layEgg = function(name) {
		return new Egg(this)
	}
  
function Bird(name,hasWings) {
	this.hasWings = hasWings;
};

	Bird.prototype = new Animal();
  Bird.prototype.constructor = Bird;
	Bird.prototype.move = function() {
		console.log('Fly');
	};

function Fish(name) {
};

	Fish.prototype = new Animal();
  Fish.prototype.constructor = Fish;
	Fish.prototype.move = function() {
		console.log('Swim');
	};

function Penguin(name) {
  //Animal.call(name);
  this.name = name;
  
};

	Penguin.prototype = new Bird();
  	Penguin.prototype.constructor = Penguin;
	Penguin.prototype.move = Fish.prototype.move;
	

new Animal("Simba").move();// 'walk'
new Fish("Nemo").move();// 'swim'
new Bird("Lulu").move();// 'fly'
var pengo = new Penguin("Pengo");
console.log(pengo.name);     // "Pengo"
pengo.move();   //'swim'
pengo.hasWings; //true;
pengo instanceof Penguin; //true
pengo instanceof Bird; 	  //true
pengo instanceof Animal;  //true

//2b
/*Create a class _Egg_, whose instances have one method, 
_hatch(name)_, which returns a new instance (named _name_) 
of the same species which laid the egg.
Assume that every Animal can lay an egg with an instance method 
_layEgg()_ which creates a new Egg instance.
Try to solve this without subclassing Egg and without 
implementing _layEgg_ and _hatch_ more than once.*/
function Egg(parent) {
	this.hatch = function(name) {
		return new parent.constructor('baby ' + name);
	}
}

var pengo = new Penguin("Pengo");
var egg = pengo.layEgg();
egg.constructor === Egg; //true
var baby = egg.hatch("Penglet");
console.log('is baby instanceof Penguin? ');
baby instanceof Penguin; //true

console.log('Testing Fish Eggs')
var nemo = new Fish("Nemo");
egg = nemo.layEgg();
egg.constructor === Egg; //true
baby = egg.hatch("Nemolet");
console.log('is baby instanceof Fish? ');
baby instanceof Fish; //true

//3a

// This IIFE will define a superclass:
var Card = (function(){
    
	// Ctor:
	function Card(id) {
		this.id = id;
	}


	// Instance methods (attach these to Card's prototype):

	Card.prototype.rank = function() {
        return Math.floor((this.id/4)+1);
    }

   Card.prototype.suit = function() {
        var suitnum = (this.id%4)+1;
        return suitnum;
    }

   Card.prototype.color = function() {
      if(this.suit(this.id) < 3) {
      colorname = "red";
    } else {
      colorname = 'black';
    }
    return colorname;
    
};
  


    Card.prototype.name = function() { 
      var rankVal = this.rank();
        var suitVal = this.suit();
        return rankVal && suitVal &&
            (this.constructor.rankNames()[rankVal-1]
            +' of '
            +this.constructor.suitNames()[suitVal-1]);
};
  
  Card.prototype.isValid = function() {
    if ((typeof id) !='number' || (id%1 !== 0) || (id < 0 || id > 51)) {
      return false;
    }return true;
}

	// Private data:
	var rankNames = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
	var suitNames = ['Hearts','Diamonds','Spades','Clubs'];


	var fullSet = [];
	// loop to fill fullSet with 52 instances...
    for (var i=0; i<52; i++) {
      fullSet.push(Card(i));
    }
	// Class methods:

  Card.isCard = function(card) { // Returns --> true, falsish
        if (card && (typeof card === 'object') // check for null or primitive
            && (card.name === name)) {
          return true;
        } return false;// check at least one method
            //&& ('id' in Card) && isValid(Card.id); //check id
    };
  
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




