/**
 * Created by michaelt on 2/16/15.
 */

// #2 Imaginary Menagerie

function Animal(name) {
    this.name = name;
    this.move = function() {
        return "walk";
    }
}

function Bird() {
    Animal.call(this);
    this.move = function() {
        return "fly";
    }
}
Bird.prototype = Object.create(Animal.prototype);

function Fish() {
    Animal.call(this);
    this.move = function() {
        return "swim";
    }
}
Fish.prototype = Object.create(Animal.prototype);

function Penguin() {
    Bird.call(this);
    this.move = Fish.move;
}
Penguin.prototype = Object.create(Bird.prototype);