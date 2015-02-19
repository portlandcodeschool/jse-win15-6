var MemoryCards = (function() {
	function Ctor() {
		var people = ['jerk', 'jaunty', 'mensch', 'meanie', 'burnout', 'bimmer', 'clod', 'chippy']

		this.values = function() {
			return people.slice();
		}

		this.match = function(a,b) {
			return a[0] === b[0];
		}

		this.display = function(val) {
			return val
		}
	}
	//...

	return Ctor;
})();
