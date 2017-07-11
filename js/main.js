"use strict";

var cat = {
    name: {first: "Fluffy", last: "labe"},
    color: "coffee"
};

//Enumerable affects see in the objects keys
Object.defineProperty(cat, "name", {enumerable: true});

for (var propertyName in cat) {
    console.log(propertyName + ":" + cat[propertyName]);
}

console.log(Object.keys(cat));

//Enumerable affects JSON of the object
console.log(JSON.stringify(cat));

//We can see property
console.log(cat["name"]);