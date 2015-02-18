
// **a)** Here's a sequence of simple exercises related to how constructors and prototypes work.

// -   First make a constructor named _Ctor_ for an object that has properties _a_ and _b_ 
//		and initializes them to 0 and 1 respectively.
// -   Now, make two objects named _obj1_ and _obj2_ using _Ctor_.
// -   Now make a new object _obj3_ this way:
  
function Ctor() { // ctor
	this.a = 0;
	this.b = 1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3);

console.log( "typeof obj1 = " + typeof obj1);
console.log( "typeof obj2 = " + typeof obj2);
console.log( "typeof obj3 = " + typeof obj3);

console.log("obj1.constructor; returned: " + obj1.constructor );
console.log("obj3.constructor; returned: " + obj3.constructor );

console.log( obj1);
console.log( obj3);

Ctor.prototype.d = 3;
obj1.c = 2;
console.log( "obj2.c is: " + obj2.c );


console.log( "\n--- obj1,2 & 3 now are : ");
console.log( obj1);
console.log( obj2);
console.log( obj3);


//     and check its properties.
// -   Next, add a property _c_ to _obj1_ with a value of 2.  What will be the value of _obj2.c_?
// -   Now, add a property _d_ with the value 3 to _obj1_'s "proto" 
//      (the object which helps out when _obj1_ can't do something by itself).  
//      Remember that there are at least four ways of referring to that proto object.
// -   What are the values of _obj1.d_, _obj2.d_, and _obj3.d_? Can you explain the results?

/** answer
obj1 & 2 are part of the prototype chain, so adding d to the prototype causes obj1 & obj2 to get that property
obj3 was created with a call, so it does not participate in the prototype chain unless we hitch it up, which we did not
Therefore obj3 was not part of the prototype chain.
*/


// **b)** Consider this code:


function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();
// ```


console.log("Object A logs as " + objA);
console.log("Object A getPrototypeOf(A) " + Object.getPrototypeOf(objA));
console.log ("objA instanceof Object is " + objA instanceof Object);
console.log ("objA.prototype  is " + objA.prototype );
console.log ("objA.constructor  is " + objA.constructor );

console.log('\n\nObject B logs as ' + objB);
console.log("Object B getPrototypeOf(B) " + Object.getPrototypeOf(objB));
console.log ("objB instanceof Object is " + objB instanceof Object);
console.log ("objB.prototype  is " + objB.prototype );
console.log ("objB.constructor  is " + objB.constructor );

// There is a difference between the behaviors of `objA` and `objB`!  Explain.
/** Answer
Output from above shows that 
ObjA has a constructor that is function Object() 
ObjB has a constuctor that is coming from function B, 
The behaviors would only be different constructors between A & B
Not really sure on this one.
*/

