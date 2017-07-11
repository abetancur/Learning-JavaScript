"use strict";

//A property "prototype is an objects" that exits on every function, but in a object it is undefined
//Object Prototype
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype.age = 3;

//Instance
var fluffy = new Cat("Fluffy", "red");
fluffy.age = 5;

console.log(Cat.prototype);
console.log(fluffy.__proto__);
console.log(fluffy.hasOwnProperty("age"));