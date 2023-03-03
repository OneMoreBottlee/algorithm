const input = require('fs').readFileSync('/dev/stdin')*1;

function solution(n) {
    const DP = [0, 0, 1, 1]
    
    // DP 배열 만들기
    for(let i = 4; i <= n; i++){
        // 1을 빼는 경우
        DP[i] = DP[i-1]+1
        
        // 1을 빼는 경우와 나누는 경우를 비교해 더 작은 값 저장
        
        // 2로 나누어 떨어지는 경우
        if(i%2 === 0){
            DP[i] = Math.min(DP[i], DP[i / 2] + 1)
        }
        
        // 3으로 나누어 떨어지는 경우
        if(i%3 === 0){
            DP[i] = Math.min(DP[i], DP[i / 3] + 1)
        }
    }
    
    return DP[n]
}


console.log(solution(input))
