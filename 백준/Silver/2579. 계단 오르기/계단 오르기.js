const [n, ...stair] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => +el)

function solution (n, arr) {
    // dp = n 번째 계단까지 최대값
    // 첫번째 칸을 제외한 모든 칸은 1칸씩 오르거나 2칸씩 오르는 경우 밖에 없음
    const dp = []
    dp[0] = arr[0]
    dp[1] = Math.max(arr[0]+arr[1], arr[1])
    dp[2] = Math.max(arr[1]+arr[2], arr[0]+arr[2])
    
    // 따라서 dp = 현재칸 + (직전칸의 최대값, 전전칸의 최대값) 중 최대값
    // 마지막 계단까지 dp를 구함
    for(let i = 3; i < n; i++){
        dp[i] = arr[i] + Math.max(arr[i-1]+dp[i-3], dp[i-2])
    }
    
    return dp[n-1]
}

console.log(solution(n, stair))