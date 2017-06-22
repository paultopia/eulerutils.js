// experimental hand-rolled memoization to keep inner values

"use strict";
var count = 0
var cache = new Map();
cache.set(0,0);
cache.set(1,1);

const innerFact = function(num, orignum, acc){
    count += 1;
    if (cache.get(num)) {
        console.log("done in: ", count, " steps. ")
        var result = cache.get(num) * acc;
        cache.set(orignum, result);
        return result
    }
    return innerFact(num - 1, orignum, num * acc);
};

function factorial(num) {
    count = 0;
    return innerFact(num, num, 1);
}

console.log("factorial 8 is: ", factorial(8));
console.log("factorial 9 is: ", factorial(9));
console.log("factorial 3 is: ", factorial(3));
console.log("factorial 4 is: ", factorial(4));

module.exports = {factorial};
