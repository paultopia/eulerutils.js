"use strict";

const M = require('mori')

function fiboHelper([a, b]) {
    return [b, a + b];
}

function fibonacci(n){
    const lazyFibs = M.map(M.first, M.iterate(fiboHelper, [0, 1]));
    return M.take(n, lazyFibs);
}

console.log(fibonacci(20))
