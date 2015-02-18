//Question 1(a)
console.log('Question 1, part A:')

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
console.log('This is the value of obj2.c: ' +obj2.c);
obj1.__proto__.d = 3;
console.log('Value of obj1.d: ' +obj1.d+ ' and the value of 2.d: ' +obj2.d+ ' and the value of 3.d: ' +obj3.d);
console.log('Objects 1 and 2 both share the same proto, and so when it is given proptery d as equal to 3, they are both affected. Because obj3 is created by the call method, rather than through the constructor directly, it has a different proto(link) and so it does not receive d as a property.')

//Part (b)
console.log('Question 1, part B:')

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

//explanation of difference:
console.log('The nearest I can find to the difference between objA and ObjB is that if you look at their individual __proto__\'s, A points to Object, while B points to B.')
console.log('In addition, looking at their constuctors, A points to function Object, while B points to function B')
console.log('This means that A is pointing to the prototype Object function, while I believe that B is pointing to the class function.')

//Question 2
console.log("Question 2, part A");

function Animal(name){
	this.name = name;
};

Animal.prototype.move = function(){
	return "walk"
};
Animal.prototype.layEgg = function(){
/*	console.log('this is the this layegg ')						a mess of things
	console.log(this); 											i didn't need.
	var newBorn = new Egg();
	newBorn.prototype = this.constructor;
	newBorn.prototype.constructor = this.constructor;*/
	return new Egg(this.constructor);

}

function Bird(name){
	this.name = name;
};
Bird.prototype = new Animal();
Bird.prototype.constructor = Bird;
Bird.prototype.hasWings = true;
Bird.prototype.move = function(){
	return "fly"
};

function Fish(name){
	Animal.call(this, name);
};

Fish.prototype = new Animal();
Fish.prototype.constructor = Fish;
Fish.prototype.move = function(){
	return "swim";
};

function Penguin(name){
	Bird.call(this, name);
}
Penguin.prototype = new Bird()
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

console.log(new Animal("Simba").move());// 'walk'
console.log(new Fish("Nemo").move());// 'swim'
console.log(new Bird("Lulu").move());// 'fly'	
//console.log(var pengo = new Penguin("Pengo"));
console.log(pengo.name);     // "Pengo"
console.log(pengo.move());   //'swim'
console.log(pengo.hasWings); //true;
console.log(pengo instanceof Penguin); //true
console.log(pengo instanceof Bird);    //true
console.log(pengo instanceof Animal);  //true

console.log('Question 2, Part B')

function Egg(Species){
	this.hatch = function(name){
		return new Species(name);
	};
}

/*helper function for Egg() -- But then I didn't need it!

function matchInstance(name){
	console.log(this);
	if (this.name instanceof Penguin){
		return Penguin;
	} else if (this.name instanceof Fish){
		return Fish;
	} else if (this.name instanceof Bird){
		return Bird;
	} else {
		return Animal;
	}
}
*/
var pengo = new Penguin("Pengo");
var egg = pengo.layEgg();
console.log('Is Pengo\'s egg constructor equal to Egg? ' + (egg.constructor === Egg)); //true
var baby = egg.hatch("Penglet");
console.log('Is Penglet an instance of Penguin? ' +(baby instanceof Penguin)); //true

var nemo = new Fish("Nemo");
egg = nemo.layEgg();
console.log('Is nemo\'s egg\'s constructor equal to Egg? '+ (egg.constructor === Egg));
baby = egg.hatch("Nemolet");
console.log('Is Nemolet an instance of Fish? ' + (baby instanceof Fish));

