const input = require('fs').readFileSync('/dev/stdin')*1;

function solution(n) {
    const dp = [0,1]
    
    for(let i=2; i<=n; i++){
        let min = 4;
        for(let j = 1; j*j<=i; j++){
            min = Math.min(min, dp[i-j*j])
        }
        dp[i] = min + 1
    }
    
    return dp[n]
}

console.log(solution(input))