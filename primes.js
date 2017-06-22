use strict;
function innerIsPrime(test, primesarray){
    for (x of primesarray){
        if (x > Math.sqrt(test)) {
            return true;
        }
        if (test % x === 0) {
            return false;
        }
    }
}

function generatePrimes(limit){
    var primes = [2, 3];
    var toTest = 5;
    while (toTest <= limit) {
        if (innerIsPrime(toTest, primes)) {
            primes.push(toTest);
        }
        toTest += 2;
    }
    return primes;
}

function isPrime(test){
    return generatePrimes(test).pop() === test;
}

module.exports = {generatePrimes, isPrime};

