const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(" ").map(el => +el)
const arrN = input[1].split(" ").map(el => +el)
const arr = input.slice(2).map(el => el.split(" ").map(ele => +ele))

const sumArr = [0]

for(let i = 1; i <= N; i++){
    sumArr[i] = sumArr[i-1] + arrN[i-1]
}

const result = arr.map(el => sumArr[el[1]] - sumArr[el[0]-1])
console.log(result.join("\n"))