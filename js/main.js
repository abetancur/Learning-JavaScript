"use strict";

var cat = {
    name: {first: "Fluffy", last: "labe"},
    color: "coffee"
};

Object.defineProperty(cat, "name", {configurable: false});
Object.defineProperties(cat, {configurable: false});
Object.defineProperty(cat, "color", {enumerable: false});
