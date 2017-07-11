"use strict";

//A property "prototype is an objects" that exits on every function, but in a object it is undefined
//Function Prototype
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype.age = 3;

//Object prototype
var fluffy = new Cat("Fluffy", "red");
fluffy.age = 5;

console.log(Cat.prototype.age);
console.log(fluffy.__proto__.age);
console.log(fluffy.hasOwnProperty("age"));
console.log(fluffy.age);