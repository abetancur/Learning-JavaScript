//"use strict";

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

var cat = new Cat('job', 'red');
//New keyword return a properties of object instance
console.log(cat);

//Object Dog belongs to object window
function Dog() {
    this.age = 'green';
}

var dog = Dog();
console.log(window.age);
