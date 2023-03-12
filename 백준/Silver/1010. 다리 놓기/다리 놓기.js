let [T, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
arr = arr.map(el => el.split(" ").map(ele => ele*1))

console.log(arr.map(el=>solution(el)).join("\n"))

function solution(arr) {
    const [r, n] = arr
    
    return parseInt(factorial(n) / (factorial(r) * factorial(n-r)))
}

function factorial(num){
    const dp = [1n, 1n]
    
    for(let i = 2n; i <= num; i += 1n){
        dp[i] = dp[i-1n] * i
    }

    return dp[num]
}