const [firstLine, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [c, n] = firstLine.split(' ').map(Number)
const cities = arr.map(el => el.split(' ').map(Number))

console.log(solution(c, n, cities))

function solution(c, n, cities){
    // dp 배열 생성
    const dp = Array(c + 1).fill(Infinity)
    
    // 도시 개수만큼 반복
    for(let i = 0; i < n; i++){
        const [cost, person] = cities[i]

        // 도시별 첫 번째 홍보효과 값 세팅
        if(dp[person] > cost) dp[person] = cost
        
        // 값을 기준으로 목표 c까지 최소값 세팅
        for(let j = 1; j <= c; j++){
            dp[j] = j < person ? Math.min(dp[j], cost) : Math.min(dp[j], dp[person] + dp[j-person])
        }
    }
    
    return dp[c]
}
