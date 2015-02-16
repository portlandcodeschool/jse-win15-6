var MemoryCards = (function() {
	
	function Ctor() {

		// card values (each card is a pair, [name, groupnum] optional subgroup - for more possible matches)
		// refactor as objects?
		// groups: 1 = igneous, 2 = metamorphic, 3 = sedimentary;
    var sub1a = 'extrusive', sub1b = 'intrusive';
    var sub2a = 'foliated', sub2b = 'nonfoliated';
    var sub3a = 'clastic', sub3b = 'chemical';

		var rocks = [ ['basalt', 1, sub1a],['pumice', 1, sub1a], ['obsidian', 1, sub1a],['rhyolite', 1, sub1a], 
					['diorite', 1, sub1b], ['peridotite', 1, sub1b], ['granite', 1, sub1b], ['gabbro', 1, sub1b], 
					['schist', 2, sub2a], ['gneiss', 2, sub2a], ['slate', 2, sub2a], ['phyllite', 2, sub2a], 
					['quartzite', 2, sub2b], ['marble', 2, sub2b], ['soapstone', 2, sub2b], ['hornfels', 2, sub2b],
					['breccia', 3, sub3a], ['sandstone', 3, sub3a], ['shale', 3, sub3a], ['siltstone', 3, sub3a], 
					['flint', 3, sub3b], ['dolomite', 3, sub3b], ['limestone', 3, sub3b], ['chert', 3, sub3b] ];

		this.values = function() {
			return rocks.slice();
		};

		this.match = function(pair1,pair2) {  //each pair is [name, groupnum] 
			return (pair1[1]===pair2[1]); // check if groupnum matches
		};

		this.display = function(val) { //val is pair [name, groupnum]
			return val[0];  //display just the rock name
		};
	}
	//...

	return Ctor;

})();

var cards = new MemoryCards();

// if (typeof module !== "undefined") {
//     module.exports = MemoryCards;
// }


/*
To run the code:
var cards = new MemoryCards()

cards => returns functions
typeof cards === 'object'
Array.isArray(cards) => false

cards.values() => returns array
Array.isArray(cards.values()) => true
Array.isArray(animals) => true

var card0 = cards.values()[0]
card0 => Array [ 'dog', 1 ]
cards.display(card0) => 'dog'
*/

/* just in case:
igneous
>extrusive
basalt
pumice
obsidian
rhyolite
>intrusive
diorite
peridotite
granite
gabbro

metamorphic
>foliated
schist
gneiss
slate
phyllite
>non-foliated
quartzite
marble
soapstone
hornfels

sedimentary
>clastic
breccia
sandstone
shale
siltstone
>chemical
flint
dolomite
limestone
chert

*/


