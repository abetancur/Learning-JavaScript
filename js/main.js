"use strict";

var cat = {
    name: {first: "Fluffy", lastName: "label"},
    color: "coffee"
};

//Attribute in properties and new create property of object
Object.defineProperty(cat, "fullname", {
    get: function () {
        return this.name.first + " " + this.name.lastName
    },
    set: function (value) {
        var parts = value.split(" ");
        this.name.first = parts[0];
        this.name.lastName = parts[1];
    }
});

cat.fullname = "Prety Strong";
console.log(cat.fullname);
console.log(cat.name.first);
console.log(cat.name.lastName);
