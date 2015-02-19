// First make a constructor named Ctor for an object that has properties a and b and initializes them to 0 and 1 respectively
function Ctor(){
	this.a = 0;
	this.b = 1;
}
// Now, make two objects named obj1 and obj2 using Ctor.
var obj1 = new Ctor();
var obj2 = new Ctor();

// Now make a new object obj3 this way:
var obj3 = {};
Ctor.call(obj3);

// and check its properties
//"> obj3"
//"-> Object {a:0, b:1}"

// Next, add a property c to obj1 with a value of 2. What will be
// the value of obj2.c?
obj1.c = 2;

//the value of obj2.c is undefined

// Now, add a property d with the value 3 to obj1's "proto"
// obj1.constructor.prototype.d = 3;
obj1.__proto__.d = 3

// What are the values of obj1.d, obj2.d, and obj3.d? Can you 
//explain the results?

// > obj1
// -> Ctor {a: 0, b: 1, c: 2, d: 3}
// > obj2
// -> Ctor {a: 0, b: 1, d: 3}
// > obj3
// -> Object {a: 0, b: 1}

// obj1 and obj2 were created using the Ctor constructor and as 
//such share the same prototype. obj3 was created by first 
//declaring an empty object then calling the Ctor constructor on 
//it. This has the effect of creating an object in the form of a 
//Ctor instance, but that object is not a member of the 
//Ctor class, and cannot refer to the Ctor prototype.

console.log(obj1);
console.log(obj2);
console.log(obj3);

////////////////
//part b
////////////////

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();