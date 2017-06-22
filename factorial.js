// experimental hand-rolled memoization to keep inner values

"use strict";
var cache = new Map();
cache.set(0,0);
cache.set(1,1);

const innerFact = function(num, orignum, acc){
    if (cache.get(num)) {
        var result = cache.get(num) * acc;
        cache.set(orignum, result);
        return result
    }
    return innerFact(num - 1, orignum, num * acc);
};

function factorial(num) {
    return innerFact(num, num, 1);
}

module.exports = {factorial};

