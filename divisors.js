const R = require('ramda');
function findDivisors(num){
    var maxnum = Math.round(Math.sqrt(num));
    var divisors = [];
    var candidates = R.range(1, maxnum + 1);
    return function innerFinder(n, dvs, cands){
        if (cands.length === 0) {
            return {"divisors": dvs, "number": n};
        } else if (n % cands[0] === 0) {
            var newdvs = dvs.concat([cands[0], n/cands[0]])
            cands.shift();
            return innerFinder(n, newdvs, cands);
        } else {
            cands.shift();
            return innerFinder(n, dvs, cands)
        }
    }(num, divisors.sort((x, y)=> x - y), candidates);
}


function findProperDivisors(num){
    var divs = new Set(findDivisors(num)["divisors"]);
    divs.delete(num);
    return {"properDivisors": [...divs].sort((x, y)=> x - y), "number": num};
}

console.log(findDivisors(28));
console.log(findProperDivisors(28));
