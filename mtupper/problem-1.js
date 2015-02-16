/**
 * Created by mtupper on 2/16/15.
 */

// #1 Constructor Basics

/*
function Ctor() {}
Ctor.prototype.a = 0;
Ctor.prototype.b = 1;
*/

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

/*
Console returns the following values:

obj1
Ctor {a: 0, b: 1, c: 2, d: 3}

obj2
Ctor {a: 0, b: 1, d: 3}

obj3
Object {a: 0, b: 1}

First we created obj1 and obj2 using the Ctor constructor which sets properties a and b to 0 and 1 respectively.
Next, we created obj3 as an empty object (using the Object constructor) and then called the Ctor constructor on obj3,
  setting the a & b properties to 0 & 1.
We then added property c to obj1 and set it to 2.
Finally, we added the property d set to 3 to the prototype of obj1 (from the Ctor constructor), which was then also
  inherited by the obj2 object that was also created with the Ctor constructor.
The obj3 never had anything done to it since calling the Ctor constructor on it and so it remained
  with only the a & b properties
 */

function A() {}
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {}
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

/*
The constructor for objA is the Object() constructor, while
the constructor for objB is the B() constructor
 */