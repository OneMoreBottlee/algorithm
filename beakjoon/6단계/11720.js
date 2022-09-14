const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const N = input[0]
let result = 0;

for(let i = 0; i < N; i++){
    result += Number(input[1][i])
}

console.log(result)