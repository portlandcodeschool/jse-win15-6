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
    return new Egg(name);
};

var Egg = function(nameString){
  this.hatch = function(name){
    return new nameString.constructor(name);
  };
};

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



var pengo = new Penguin("Pengo");
var egg = pengo.layEgg();
egg.constructor === Egg; //true
var baby = egg.hatch("Penglet");
baby instanceof Penguin; //true

var nemo = new Fish("Nemo");
egg = nemo.layEgg();
egg.constructor === Egg; //true
baby = egg.hatch("Nemolet");
baby instanceof Fish; //true


/*
Animal.prototype.layEgg(Fish);
Object { hatch: Egg/this.hatch() }
var lipi = new Fish("Lipi")
undefined
lipi
Object { name: "Lipi" }
var egg = lipi.layEgg();
undefined
egg
Object { hatch: Egg/this.hatch() }
egg.constructor === Egg;
true
var baby = egg.hatch("Kislipi");
undefined
baby
String [ "K", "i", "s", "l", "i", "p", "i" ]
baby instanceof Fish;
false
*/