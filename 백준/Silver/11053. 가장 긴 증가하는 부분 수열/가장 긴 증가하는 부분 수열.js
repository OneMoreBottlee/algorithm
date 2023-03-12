const [n, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")
const N = n*1
const seq = arr.split(" ").map(Number)
const dp = Array(N).fill(1)

// LIS
for(let i = 0; i < N; i++){
    for(let j = 0; j < i; j++){
        if(seq[i] > seq[j]){
            dp[i] = Math.max(dp[i], dp[j]+1)
        }
    }
}

console.log(Math.max(...dp))