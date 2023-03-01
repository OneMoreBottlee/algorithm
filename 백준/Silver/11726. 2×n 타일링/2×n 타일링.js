const input = require('fs').readFileSync('/dev/stdin').toString().trim()*1;

function tiling2x1(n) {
    let memo = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i-1]%10007 + memo[i - 2]%10007;
    }

    return memo[n]%10007;
};

console.log(tiling2x1(input))