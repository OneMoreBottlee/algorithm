const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const N = Number(input[0])

function factorial(n) {
    if(n === 0){return 1}
    if(n === 1){return 1}

    return n * factorial(n-1)
}

console.log(factorial(N))