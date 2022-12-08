// 대표값
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.sort((a,b) => a-b)

let totalValue = 0
const count = input.length

for(let i = 0; i < count; i++){
totalValue = totalValue + Number(input[i])
}

//평균값
console.log(totalValue/input.length)
//중앙값
console.log(input[2])
