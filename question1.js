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

obj2.c 

obj1.constructor.prototype.d = 3;

obj1.d 
obj2.d 
obj3.d 