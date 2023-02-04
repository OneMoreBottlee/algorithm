const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")

const M = input[0]*1
const N = input[1]*1

let result =""

const checkPrime = (n) => {
    if(!n || n === 1)return false
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0)return false
    }
    return true
}

for(let i = M; i <= N; i++){
    if(i === 1)continue
    if(i === 2 || i % 2 !== 0){
        if(checkPrime(i))result += i + "\n"
    }
}

console.log(result.slice(0, result.length-1))