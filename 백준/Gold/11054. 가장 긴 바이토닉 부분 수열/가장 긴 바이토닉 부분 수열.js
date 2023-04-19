const [n, arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const N = n*1
const arrA = arr.split(" ").map(Number)

// LIS - 최장 증가 부분 수열
const LIS = Array(N).fill(1)
for(let i = 0; i < N; i++){
    for(let j = 0; j < i; j++){
        if(arrA[i] > arrA[j]){
            LIS[i] = Math.max(LIS[i], LIS[j]+1)
        }
    }
}

// LDS - 최장 감소 부분 수열
const LDS = Array(N).fill(1)
for(let i = N; i >= 0; i--){
    for(let j = N; j > i; j--){
        if(arrA[i] > arrA[j]){
            LDS[i] = Math.max(LDS[i], LDS[j]+1)
        }
    }
}

const Bitonic = []
for(let i = 0; i < N; i++){
    Bitonic[i] = LIS[i] + LDS[i]
}

console.log(Math.max(...Bitonic)-1)