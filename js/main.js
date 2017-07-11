"use strict";

var arr = Array("coffee", "green", "gray");

//var last = arr[arr.length - 1];
//create new property get value last position
Object.defineProperty(Array.prototype, "last", {
    get: function () {
        return this[this.length - 1];
    }
});


console.log(arr.last);

var arr2 = ["one", "two", "three"];
//Use the array objects prototype
console.log(arr2.last);