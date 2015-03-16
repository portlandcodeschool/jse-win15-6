/*
insert "this" statements to define name?? Ex in Animal
 */

function Animal(name) {
this.name=name;
};

Animal.prototype.a =1;

Animal.prototype.move = function() {
  return "walk";
};


function Bird(name) {
this.name=name; 
};

Bird.prototype = new Animal();
Bird.prototype.constructor=Bird;

Bird.prototype.haswings=true;

Bird.prototype.move=function(){
  return "fly";
};


function Fish(name) {  
this.name=name;  
};

Fish.prototype=new Animal();
Fish.prototype.constructor=Fish;
Fish.prototype.move=function(){
  return"swim";
};


function Penguin(name){
  this.name=name;
};

Penguin.prototype = new Bird();
Penguin.prototype.constructor=Penguin;
Penguin.prototype.move= Fish.prototype.move;

/*
b) Create a class Egg, whose instances have one method, hatch(name), which returns a new instance 
(named name) of the same species which laid the egg. Assume that every Animal can lay an egg with 
an instance method layEgg() which creates a new Egg instance. Try to solve this without subclassing
Egg and without implementing layEgg and hatch more than once.

You should see this behavior:

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
*/



Animal.prototype.layEgg = function(){
  return new Egg(this);  
}


function Egg(name){
  this.name= name;
}

Egg.prototype.hatch=function(name){
  var name=name;
  return new this.name.constructor();
}
