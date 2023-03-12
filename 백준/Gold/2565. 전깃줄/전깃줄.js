const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const line = input.map(el => el.split(" ").map(Number)).sort((a,b) => a[0] - b[0])
const N = n * 1
const dp = Array(N).fill(1)

// 교차하지 않는 전깃줄 확인
for(let i = 0; i < N; i++){
    count = 0
    for(let j = 0; j < i; j++){
        if(line[i][1] > line[j][1]){
            dp[i] = Math.max(dp[i], dp[j]+1)
        }
    }
}

const result = N - Math.max(...dp)
console.log(result)