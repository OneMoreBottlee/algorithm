const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(el => +el)
const arr = input.slice(1)

function solution(n){
    const fib0 = [1,0]
    const fib1 = [0,1]

    for(let i = 2; i <= n; i++){
        fib0[i] = fib0[i-1] + fib0[i-2]
        fib1[i] = fib1[i-1] + fib1[i-2]
    }

    return `${fib0[n]} ${fib1[n]}`
}

const result = arr.map(el => solution(el)).join("\n")
console.log(result)