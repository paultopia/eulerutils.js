"use strict";
const R = require("ramda");
var count = 0

// this doesn't work, caches final result instead of intermediate result for some weird reason.  

const innerFact = R.memoizeWith(args => args[0],function(num, acc){
    count += 1;
    if (num == 0) {
        console.log("done in: ", count, " steps. ")
        return acc;
    }
    return innerFact(num - 1, num * acc);
});

// const innerFact = R.memoize(function(num, acc){
//     count += 1;
//     if (num == 0) {
//         console.log("done in: ", count, " steps. ")
//         return acc;
//     }
//     return innerFact(num - 1, num * acc);
// });


function factorial(num) {
    return innerFact(num, 1);
}

console.log("factorial 5 is: ", factorial(5));
console.log("factorial 3 is: ", factorial(3));
console.log("factorial 5 is: ", factorial(5));
console.log("factorial 10 is: ", factorial(10));
