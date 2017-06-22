"use strict";
const R = require("ramda");
var count = 0

const innerFact = R.memoize(function(num, acc){
    count += 1;
    if (num == 0) {
        console.log("done in: ", count, " steps. ")
        return acc;
    }
    return innerFact(num - 1, num * acc);
});

function factorial(num) {
    count = 0;
    return innerFact(num, 1);
}

console.log("factorial 8 is: ", factorial(8));
console.log("factorial 9 is: ", factorial(9));
console.log("factorial 3 is: ", factorial(3));
console.log("factorial 4 is: ", factorial(4));

module.exports = {factorial};
