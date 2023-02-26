const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input[0]*1
const arr = input[1].split(" ").map(el => el*1)

function solution(arr, n){
    const result = arr.sort((a,b)=>a-b)
    return result.reduce((acc,cur,i) => acc+cur*(n-i),0)
}

console.log(solution(arr, n))