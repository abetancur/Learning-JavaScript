"use strict";

var one = 1;

function CalNumber () {
    console.log(one); //scope global
    var two = 2;
    function Ceil () {
        var tree = 3;
        console.log(two); //new scope global
        console.log(tree); //scope local
    }
    Ceil();
    console.log(tree);
}

CalNumber();
console.log(two);