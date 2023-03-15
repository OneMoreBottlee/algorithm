const n = require('fs').readFileSync('/dev/stdin')*1

const dp = [0, 1, 2]

for(let i = 3; i <= n; i++){
    dp[i] = (dp[i-1] + dp[i-2]) % 15746
}

console.log(dp[n])