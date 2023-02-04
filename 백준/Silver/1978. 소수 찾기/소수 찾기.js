const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const checkPrime = (n) => {
    if(!n || n === 1)return false
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0)return false
    }
    return true
}

const arr = input[1].split(" ").map(el=> checkPrime(el*1)).filter(el => el === true).length


console.log(arr)