const [n, ...wine] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const dp = []

dp.push(wine[0])
dp.push(wine[0] + wine[1])
dp.push(Math.max(wine[0] + wine[1], wine[0] + wine[2], wine[1] + wine[2]))

for(let i = 3; i < n; i++){
    dp[i] = Math.max(dp[i-1], dp[i-2]+ wine[i], dp[i-3] + wine[i] + wine[i-1])
}

console.log(dp[n-1])
// 안마시거나 마시거나(연속 가능 / 불가능)