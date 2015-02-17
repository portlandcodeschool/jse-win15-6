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


