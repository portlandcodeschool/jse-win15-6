function Ctor(){
	this.a = 0;
	this.b = 1;
	};

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3);
obj3;

obj1.c = 2;

obj2.c // undefined, because it was not made with the new keyword, it is just a separete instance, as if it was made with a factory

Ctor.prototype.d = 3;
//
var prototype
_

/*
obj1
Object { a: 0, b: 1, c: 2 }
obj1.d --> obj1 doesnt have d, but can ask prototype
3
*/

obj2.d
3
console.log("we added the property d to the prototype, so the other objects can ask the parent for it. they dont have it, but inherit it from the prototype.")

// b

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};  // overriding the prototype, destroying it completely, lose all the properties that were in there earlier. Ie. if it would have had a 'color' prop, it would be lost now.
var objA = new A();



function B() {
  this.newProp = "something";  // adds it as a real prop to all instances, otherwise it would just give the acces to the prototypes properies.
};
// set default values for instances of B:
B.prototype.num = 0;  // using the prototype and adding new properties to it
B.prototype.str = 'default';
var objB = new B();
var objOtherB = new B();


//________________________

// we can override the prototype but not the function

function Animal(nameString) { 
  this.name = nameString; // could be empty
    }
// always different, you always want to change when you create one


Animal.prototype.move = function move(){ 
    return "walk"; 
};
// in the prototype, these are built in, the instances will inherit it, but can be overwritten in subclasses
 // not in function, because this way it can be overriden - in function it cant be changed

Animal.prototype.layEgg = function () {
    return new Egg(this);
}

var Egg = function(nameString){
  this.hatch = function(name){
    return new nameString.constructor(name);
  };
}

var cat = new Animal("Macsi");
cat.move();

/*
var egg = cat.layEgg();
undefined
egg
Object { hatch: Egg/this.hatch() }
baby=egg.hatch();
Object { name: undefined }
egg.hatch("kismacsi")
Object { name: "kismacsi" }
baby.name
undefined
egg.hatch.name
""
*/

// subclass pattern start
var Bird = function(nameString){
  Animal.call(this,nameString); // copies the inners of the prototype
};
Bird.prototype = new Animal();
Bird.prototype.constructor = Bird;// makes it a constructor
// pattern end

Bird.prototype.move = function() {
    return 'fly';
};
Bird.prototype = {hasWings: true};
littleBird = new Bird("Zsuzsi");


var Fish = function(nameString){
  Animal.call(this,nameString); 
};
Fish.prototype = new Animal();
Fish.prototype.constructor = Fish;
Fish.prototype.move = function () {
    return 'swim';
};

var Penguin = function(nameString){
  Bird.call(this,nameString); 
};
Penguin.prototype = new Bird();
Penguin.prototype.constructor = Penguin;
Penguin.prototype.move = Fish.prototype.move;

new Animal("Simba").move();// 'walk'
new Fish("Nemo").move();// 'swim'
new Bird("Lulu").move();// 'fly'
var pengo = new Penguin("Pengo");
pengo.name;     // "Pengo"
pengo.move();   //'swim'
pengo.hasWings; //true;
pengo instanceof Penguin; //true
pengo instanceof Bird;    //true
pengo instanceof Animal;  //true
/*
Exception: (intermediate value).move is not a function
@Scratchpad/2:49:1
*/




