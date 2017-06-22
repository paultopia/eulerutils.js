"use strict";

// NOTE: currently errors on 0 input for some of these.  Which I'm cool with, since this stuff shouldn't be defined for zero anyway.  But maybe should give a helpful error message?  Right now it just blows the stack.

const range = require('lodash.range');
function findDivisors(num){
    var maxnum = Math.round(Math.sqrt(num));
    var divisors = [];
    var candidates = range(1, maxnum + 1);
    return function innerFinder(n, dvs, cands){
        if (cands.length === 0) {
            return {"divisors": dvs.sort((x, y)=> x - y), "number": n};
        } else if (n % cands[0] === 0) {
            var newdvs = dvs.concat([cands[0], n/cands[0]])
            cands.shift();
            return innerFinder(n, newdvs, cands);
        } else {
            cands.shift();
            return innerFinder(n, dvs, cands)
        }
    }(num, divisors, candidates);
}


function findProperDivisors(num){
    var divs = new Set(findDivisors(num)["divisors"]);
    divs.delete(num);
    return {"properDivisors": [...divs].sort((x, y)=> x - y), "number": num};
}

function makeCandidateFactors(num){
    var cf = range(3, num);
    cf.unshift(2);
    return cf;
}

function findPrimeFactors(num){
    var candidateFactors = makeCandidateFactors(num);
    return function innerPrimeFactors(n, candidates, factors){
        if (candidates.length === 0) {
            factors.push(n);
            return factors;
        }
        var test = candidates.shift();
        var possibleNext = n / test;
        if (Number.isInteger(possibleNext)) {
            factors.push(test);
            return innerPrimeFactors(possibleNext, makeCandidateFactors(possibleNext), factors);
        }
        else {
            return innerPrimeFactors(n, candidates, factors)
        }
    }(num, candidateFactors, []);
}

// API is not consistent between find prime factors (returns array) and the others (return labelled map)

module.exports = {findPrimeFactors, findDivisors, findProperDivisors};
