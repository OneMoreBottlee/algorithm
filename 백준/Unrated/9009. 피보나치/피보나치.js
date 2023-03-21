const [t, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(arr.map(el=>solution(el)).join("\n"))

function solution(num){
    // n의 최대값인 10억까지의 피보나치 수를 계산해놓는다
    const dp = [0, 1]
    for(let i = 2; i <= 45; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    
    // num 보다 작은 피보나치 수 중 가장 큰 값을 찾아 result에 추가
    const result = []
    
    while(num > 0){
        const fibArr = dp.filter(el => el <= num)
        const number = fibArr[fibArr.length-1]
        num -= number
        result.push(number)
    }
    
    // 오름차순으로 정렬
    result.sort((a,b)=>a-b)

    return result.join(" ")
}