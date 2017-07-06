"use strict";

//Object Literal
var dog = {
    name: "Fluffy",
    color: "White"
}
console.log(dog);

//Constructor Functions
function Panter(name, color) {
    this.name = name;
    this.color = color;
}
var panter = new Panter("Fluffy", "White");
console.log(panter);

//Objects Create
var cat = Object.create(Object.prototype, {
    name: {
        value: 'Fluffy',
        enumerable: true,
        writable: true,
        configurable: true
    },
    color: {
        value: 'White',
        enumerable: true,
        writable: true,
        configurable: true
    }
});
console.log(cat);

//ES6 Class
class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    type() {
        console.log(this.name);
    }
}
var animal = new Animal("Eagle", "gray");
animal.type();