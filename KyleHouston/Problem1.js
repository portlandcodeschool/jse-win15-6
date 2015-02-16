//Problem 1a)
//-----------------------------
function Ctor() {
	this.a = 0;
	this.b = 1
}

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3);

// The value of obj2.c will be undefined because the property c is local to obj1 only

// Copy paste from the console:
// > obj1.c = 2
// < 2
// > obj2.c 
// < undefined
// > obj1.__proto__.d = 3
// < 3
// > obj1.d
// < 3
// > obj2.d
// < 3
// > obj3.d
// < undefined

// I think obj3 didn't inherit d because bypassing the 'new' operator when calling 
// the Ctor constructor... 


//Problem 1b)
//-----------------------------

// Nope, they behave the same!