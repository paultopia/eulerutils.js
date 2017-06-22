const divisors = require('../divisors');
const test = require('tape');

test('finds divisors', function (t) {
    t.plan(2);
    t.deepEqual(divisors.findDivisors(28)["divisors"], [1, 2, 4, 7, 14, 28]);
    t.deepEqual(divisors.findDivisors(7)["divisors"], [1, 7]);
});

test('finds proper divisors', function (t) {
    t.plan(2);
    t.deepEqual(divisors.findProperDivisors(28)["properDivisors"], [1, 2, 4, 7, 14]);
    t.deepEqual(divisors.findProperDivisors(7)["properDivisors"], [1]);
});

test('finds prime factors', function (t) {
    t.plan(2);
    t.deepEqual(divisors.findPrimeFactors(450), [2, 3, 3, 5, 5]);
    t.deepEqual(divisors.findPrimeFactors(7), [7]);
});

