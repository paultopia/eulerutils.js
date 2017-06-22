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

module.exports = {factorial};

// the problem with getting truly intermediate values is I never have them.  factorial(4) never calculates factorial(3), for example.  It would be nice if it did, but it doesn't.  it calculates a different function of 3.

// but if I walked UPWARD the numbers from 1 or 2 rather than downward from the big nums...

// but that would be dumb, because then if I calculated fact(10,000,000) I'd have to do a hash lookup for everything even if I'd previously done fact(9,999,999) and that would be ridiculously inefficient.  I'd optimize the bigfact->smallfact path at the cost of de-optimizing the smallfact->bigfact path.

// still, I'm happy here, I've beat ramda's memoization.
