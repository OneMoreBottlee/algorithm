const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input[0]*1
const dp = []

for(let i = 1; i <= n; i++){
    const data = input[i].split(" ").map(Number)
    dp.push(data)
}

for(let i = 1; i < n; i++){
    for(let j = 0; j <= i; j++){
        let left = 0
        if(j!==0)left = dp[i-1][j-1]

        let up = 0
        if(j !== i)up = dp[i-1][j]

        dp[i][j] = dp[i][j] + Math.max(left,up)
    }
}

console.log(Math.max(...dp[n-1]))