const number = require('fs').readFileSync('/dev/stdin').toString().trim()*1;

const dp = [0, 3, 7]

for(let i = 3; i <= number; i++){
    dp[i] = (dp[i-1] * 2 + dp[i-2]) % 9901
}

console.log(dp[number])