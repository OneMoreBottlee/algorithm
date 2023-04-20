const [firstline, ...mission] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(el => el.split(" ").map(Number))
const [N, M] = firstline
const table = []

for(let i = 0; i < N; i++){
    table.push(mission.shift())
}
const dp = [...new Array(N+1)].map(el => [...new Array(N+1).fill(0)])

for(let x = 1; x <= N; x++){
    for(let y = 1; y <= N; y++){
        dp[x][y] = dp[x-1][y] + dp[x][y-1] - dp[x-1][y-1] + table[x-1][y-1]
    }
}

function solution ([x1, y1, x2, y2]) {
    const value = dp[x2][y2] - (dp[x1-1][y2] + dp[x2][y1-1]) + dp[x1-1][y1-1]
    return value
}

let result = []
mission.forEach(el => result.push(solution(el)))
console.log(result.join("\n"))