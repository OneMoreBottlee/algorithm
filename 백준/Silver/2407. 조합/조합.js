const [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(BigInt)

// nCr = n! / (r! * (n-r)!)
function combination(n, r){
    const result = factorial(n) / (factorial(r) * factorial(n-r))
    return result
}

function factorial(n) {
    const dp = [1n]
    for(let i = 1n; i <= BigInt(n); i++){
        dp[i] = dp[i-1n] * i
    }
    return dp[n]
}

console.log(combination(n, m).toString())