/**
 * Created by mtupper on 2/16/15.
 */

// #2 Imaginary Menagerie

var Animal = (function() {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function() {
        return "walk";
    };
    Animal.prototype.layEgg = function() {
        return new Egg(this);
    };
    return Animal;
})();

var Bird = (function () {
    function Bird(name) {
        this.name = name;
    }
    Bird.prototype = new Animal();
    Bird.prototype.constructor = Bird;
    Bird.prototype.hasWings = true;
    Bird.prototype.move = function() {
            return "fly";
    };
    return Bird;
})();

var Fish = (function() {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype = new Animal();
    Fish.prototype.constructor = Fish;
    Fish.prototype.move = function() {
        return "swim";
    }
    return Fish;
})();

var Penguin = (function() {
    function Penguin(name) {
        this.name = name;
    }
    Penguin.prototype = new Bird();
    Penguin.prototype.constructor = Penguin;
    Penguin.prototype.move = Fish.prototype.move;

    return Penguin;
})();

var Egg = (function() {
    function Egg(layer) {
        this.hatch = function (name) {
            return new layer.constructor(name);
        }
    }
    return Egg;
})();


// ====================
// Testing suite as before...
// ====================

function assert(claim,message) {
    if (!claim) console.error(message);
}

var pengo = new Penguin("Pengo");
var rio = new Bird("Blu");
var egg = pengo.layEgg();
var nemo = new Fish("Nemo");
var baby = egg.hatch("Penglet");

assert(new Animal("Simba").move() === "walk",   "Test 1 failed");
assert(new Fish("Nemo").move() === "swim",      "Test 2 failed");
assert(new Bird("Lulu").move() === "fly",       "Test 3 failed");
assert(pengo.name === "Pengo",                  "Test 4 failed");
assert(pengo.move() === "swim",                 "Test 5 failed");
assert(pengo.hasWings === true,                 "Test 6 failed");
assert(pengo instanceof Penguin === true,       "Test 7 failed");
assert(pengo instanceof Bird === true,          "Test 8 failed");
assert(pengo instanceof Animal === true,        "Test 9 failed");
assert(egg.constructor === Egg,                 "Test 10 failed");
assert(baby instanceof Penguin === true,        "Test 11 failed");

egg = nemo.layEgg();
baby = egg.hatch("Nemolet");
assert(egg.constructor === Egg,                 "Test 12 failed");
assert(baby instanceof Fish === true,           "Test 13 failed");

console.log('***** END PROBLEM #2 *****');