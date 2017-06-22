"use strict";
var cache = new Map();
cache.set(0,0);
cache.set(1,1);

// this is even more aggressively memoized than before.  will take twice the time on the first run, but thereafter should get all intermediate results instantly.  Should build this into other module as an aggressive option, for when lots of factorials need to be called and not necessarily all in order.  This should optimize that like woah.

const windDown = function (num, result){
    if (cache.get(num)){
        return null;
    }
    cache.set(num, result);
    windDown(num - 1, result / num)
}

const innerFact = function(num, orignum, acc){
    if (cache.get(num)) {
        var result = cache.get(num) * acc;
        windDown(orignum, result);
        return result
    }
    return innerFact(num - 1, orignum, num * acc);
};

function factorial(num) {
    return innerFact(num, num, 1);
}

console.log(factorial(5));
console.log(cache);
console.log(factorial(4));
console.log(cache);
console.log(factorial(6));
console.log(cache);

module.exports = {factorial};

