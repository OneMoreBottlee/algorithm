const [n, input1, input2] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const hpArr = input1.split(" ").map(Number)
const happyArr = input2.split(" ").map(Number)

console.log(solution(n, hpArr, happyArr))

function solution(n,hpArr,happyArr){
    const dp = []
    
    for(let i = 0; i <= n; i++){
        dp.push(Array(101).fill(0))
    }

    for(let i = 1; i <= n; i++){
        const hp = hpArr[i-1]
        const happy = happyArr[i-1]
				
        for(let j = 1; j < 100; j++){
            dp[i][j] = j < hp ?
            dp[i-1][j] :
            Math.max(dp[i-1][j], dp[i-1][j-hp] + happy)
        }
    }

    return dp[n][99]
}