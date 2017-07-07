"use strict";

var cat = {
    name: {first: "Fluffy", last: "labe"},
    color: "coffee"
};

//read-only properties
console.log(Object.defineProperty(cat, "name", {writable: false}));
//Prevent the object changed using
Object.freeze(cat.name);
cat.name.first = "Lucky"; //it cant not change the object read only

//Show property descriptor
console.log(Object.getOwnPropertyDescriptor(cat, "name"));

//read-only properties
/*
console.log(Object.defineProperties(cat, {
    "name": {
        writable: false
    }
}));
//Show property descriptor
console.log(Object.getOwnPropertyDescriptors(cat, "name"));*/

