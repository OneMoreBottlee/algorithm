const [T, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const cases = []

for(let i = 0; i < input.length; i += 3){
    cases.push([input[i]*1, input[i+1].split(" ").map(Number), input[i+2].split(" ").map(Number)])
}

function solution(arr){
    const [n, arrA, arrB] = arr
    const dp = [[0, arrA[0], arrB[0]]]
    
    for(let i = 1; i < n; i++){
        dp[i] = [
            Math.max(...dp[i-1]), // 선택하지 않음
            Math.max(dp[i-1][0], dp[i-1][2]) + arrA[i], // arrA 선택
            Math.max(dp[i-1][0], dp[i-1][1]) + arrB[i] // arrB 선택
        ]
    }
    
    console.log(Math.max(...dp[n-1]))
}

cases.forEach(el => solution(el))