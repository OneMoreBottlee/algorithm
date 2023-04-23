const [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(BigInt)

// nCr = n! / (r! * (n-r)!)
function combination(n, r){
    const dp = [1n]
    
    for(let i = 1n; i <= BigInt(n); i++){
        dp[i] = dp[i-1n] * i
    }

    const result = dp[n] / (dp[r] * dp[n-r])
    return result
}

console.log(combination(n, m).toString())