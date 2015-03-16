/*
1) Constructor basics [10%]

a) Here's a sequence of simple exercises related to how constructors and prototypes work.

    First make a constructor named Ctor for an object that has properties a and b and initializes 
    them to 0 and 1 respectively.
*/

function Ctor(id){
  this.id=id,
  this.a=0,
  this.b=1
}
//Now, make two objects named obj1 and obj2 using Ctor.
var obj1 = new Ctor();
var obj2 = new Ctor();

// Now make a new object obj3 this way... and check its properties.


var obj3= {};
Ctor.call(obj3);

//Next, add a property c to obj1 with a value of 2. What will be the value of obj2.c?
obj1.c=2;
//obj2.c=2;

/*Now, add a property d with the value 3 to obj1's "proto" (the object which helps out when obj1 
can't do something by itself). Remember that there are at least four ways of referring to that 
proto object.
*/
obj1.constructor.d=3;  
Ctor.prototype.d=4;    
obj1.__proto__.d=5;               
Object.getPrototypeOf(obj1).d=6;      


//What are the values of obj1.d, obj2.d, and obj3.d? Can you explain the results?
obj1 instanceof Ctor;
//true
obj2 instanceof Ctor;
//true
obj3 instanceof Ctor;
//false
obj3 instanceof Object;
//true
/* obj1 & obj2 are Instances of Ctor, so when Ctor had a new property assigned to it (d=2), that 
property and it's value passed to obj1 & obj2. obj3, is not an instance of Ctor, it is an instance
of Object. obj3 'referenced' the Ctor constructor properties when it was created through the call
operator, and thus received Ctor's properties & values, but obj3 is not an instance of Ctor, and so
remains independent of/unaffected by any changes to that Ctor.
*/



//trial 1
//-------------------------------------------------------------------------------------------------

function Ccc(obj){
  this.obj=obj,
  this.a=0,
  this.b=1
}
var objj = new Ccc(1,2)
obj1.c=2;

obj1.constructor.prototype.d=1;


//-------------------------------------------------------------------------------------------------
/*
6.1.b

b) Consider this code:

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

There is a difference between the behaviors of objA and objB! Explain.

ANS:
A designates itself as the prototype of the object instances it creates.  Those instances  will have
default key:value pairs of num:0 & str:'defualt.
B assigns properties to it's own prototype - Object. I does not declare to be the parent of any
object. Now all incidences of the Objects prototype will have key:value pairs of num:0 and 
str:'default'.