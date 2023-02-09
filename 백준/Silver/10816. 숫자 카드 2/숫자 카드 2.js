const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arrN = input[1].split(" ")
const arrM = input[3].split(" ")

const countCheck = {}

// 시간 초과
// const result = arrM.map(m => arrN.filter(n => n === m).length).join(" ")

arrN.forEach(n => {
    countCheck[n] === undefined ? countCheck[n] = 1 : countCheck[n]++
})

const result = arrM.map(m => countCheck[m] ? countCheck[m] : 0 ).join(" ")

console.log(result)