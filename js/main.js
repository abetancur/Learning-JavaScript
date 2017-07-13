"use strict";

class Animal {
    constructor(voice) {
        this.voice = voice || "grunt";
    }

    speak() {
        console.log(this.voice);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super("Meow");
        this.name = name;
        this.color = color;
    }
}

var fluffy = new Cat("fluffy", "coffee");
console.log(fluffy);
console.log(fluffy.constructor);
console.log(fluffy.__proto__.__proto__);