const primes = require('../primes');
const test = require('tape');

test('can detect primes', function (t) {
    t.plan(2);
    t.equal(primes.isPrime(10), false);
    t.equal(primes.isPrime(11), true);

});

test('can generate primes', function (t) {
    t.plan(1);
    t.deepEqual(primes.generatePrimes(20), [2, 3, 5, 7, 11, 13, 17, 19]);

});
