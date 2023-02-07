const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")

const N = input[0] * 1
const K = input[1] * 1

let result = 1

for(let i = K+1; i <= N; i++){
    result *= i
}

for(let i = 1; i <= N-K; i++){
    result /= i
}

console.log(result)