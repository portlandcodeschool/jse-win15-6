/* 1a */

function Ctor(a, b) {
this.a = a;
this.b = b;
};

var obj1 = new Ctor(0, 1);
var obj2 = new Ctor(0, 1); 

var obj3 = {};
Ctor.call(obj3);

//add property c to obj1 with value of 2
obj1.c = 2; //obj2 does not change. 

//add property d with value 3 to obj1's proto.
Ctor.prototype.d = 3;

//check value obj1.d, obj2.d and obj3.d  

obj1.d = 3
obj2.d = 3
obj3.d = undefined

//obj1 and 2 were created with the Ctor constructor, which their d key == 3. Ctor constructor was lent to obj3 as a temp method

/*1b*/
/* consider this code */
function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

//example A overwrites the prototype completely

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

//example B adds to the existing prototype property