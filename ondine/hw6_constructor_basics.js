// FACTORY PATTERN

// function factory() {
//   var obj = {};
//   obj.a = 1;
//   obj.b = 2;
//   return obj;
// }

// var newObj = factory(); // new object
// console.log("made with factory ==>", newObj);
// var obj1 = factory();
// obj1.sound = "meow";

// ============
// CONSTRUCTOR PATTERN

// function Obj() {
//   this.c = 1;
//   this.d = 2;
//   this.appy = function() {console.log('i happy')};
// }

// Obj.prototype.someThing = function() {
//   console.log('answers');
// }

// secondObj = new Obj();
// console.log("made with constructor ==>", secondObj);

// ============

// Problem 1a) constructor basics

function Ctor() {
  this.a = 0;
  this.b = 1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3); // creates an object that doesn't inherit its prototype

console.log((obj3.a), "expect 0");
console.log((obj3.b), "expect 1");

// Add property c to obj1
obj1.c = 2;
console.log((obj1.c), "obj1.c => 2");
console.log((obj2.c), "obj2.c => expect undefined");
// obj2.c = undefined (because added property to instance only)
// Ctor.prototype.c = 2;

// Add property d to obj1 proto (four ways to refer to proto object) (what are they??)
Ctor.prototype.d = 3;
// or
// obj1.constructor.prototype.d = 3;

console.log((obj1.d), "obj1.d => expect 3");
// obj1.d = 3
console.log((obj2.d), "obj2.d => expect 3");
// obj2.d = 3
console.log((obj3.d), "obj3.d => expect undefined");
// obj3.d = undefined (not an instance made with 'new Ctor' so doesn't inherit proto properties)


// Problem 1b) Explain difference between objA and objB

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'}; // overwriting prototype of A completely (lose any other existing properties)
var objA = new A();
// objA.constructor is Object

function B() {};
// set default values for instances of B:
B.prototype.num = 0; // adds new property to prototype
B.prototype.str = 'default'; // does not overwrite any other existing properties
var objB = new B();

// objB.constructor is B
