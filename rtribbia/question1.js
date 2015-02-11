//----------------------------------
//  1 A
//----------------------------------

function Ctor() {
	this.a = 0;
	this.b = 1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();
var obj3 = {};
Ctor.call(obj3);

obj1.c = 2;
obj1.__proto__.d = 3;


1A. Obj 1 & 2 show property 'd' as 3 because they both have the same constructor prototype (w magic stamp)
	Obj 3 on the other hand, used Ctor as a borrowed initializer (temporary method) so when changes were made to the prototype, only objs 1 2 inherited them



//----------------------------------
//  1 B
//----------------------------------

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

1B. no idea? Maybe objA treats it's prototype as an object with only two properties. objB's prototype might not be an object in the same sense, also might have more than those 2 properties?



