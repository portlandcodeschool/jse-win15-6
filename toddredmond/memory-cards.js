/** values(): return an array of all the card values in the set.  
Each value could be either an object or a primitive, depending 
on how you choose to implement your cards.

* match(valA,valB): given card values _valA_ and _valB_ (both 
of which should be found in _values()_), return true if they 
match as a pair, or false otherwise.

* display(val): given card value _val_, return a string which 
represents that card.  If your card values are already strings, 
this method could merely return _val_, but if your card values 
are objects, you'll need to generate a string version (e.g. 
	the _name()_ or _shortName()_ of playing-card objects)*/

var MemoryCards = (function() {
	function Ctor() {
		var alpha = ['a','b','c'];
		this.values = function() { 
		return alpha.slice();
		}

		this.match = function(a,b) {
			if (a[!=b) {
				return false;
			}
			return true;
		}

		this.display = function(val) {
			return val;
		}
	}
	//...

	return Ctor;
})();
