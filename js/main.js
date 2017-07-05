"use strict";

//Objects Literal
var Dog = {
    name: "Caty",
    color: "black"
}

//Add properties
Dog.age = 3;
document.write("The age of Dog is: " + Dog.age);

//Objects Constructor
function Cat () {
    this.name = "Lucky";
    this.color = "coffee";
}

//Instance Object
var cat = new Cat();
document.write("<br />The name your Cat is: " + cat.name);

