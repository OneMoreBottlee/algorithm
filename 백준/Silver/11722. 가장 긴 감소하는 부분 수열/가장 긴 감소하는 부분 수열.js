const [n, arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const N = n*1
const arrA = arr.split(" ").map(Number)

// LDS - 최장 감소 부분 수열
const LDS = Array(N).fill(1)
for(let i = N; i >= 0; i--){
    for(let j = N; j > i; j--){
        if(arrA[i] > arrA[j]){
            LDS[i] = Math.max(LDS[i], LDS[j]+1)
        }
    }
}

console.log(Math.max(...LDS))