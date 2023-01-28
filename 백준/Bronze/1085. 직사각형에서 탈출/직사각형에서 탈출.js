const input = require('fs').readFileSync("/dev/stdin").toString().split(' ')

const x = input[0]*1
const y = input[1]*1
const w = input[2]*1
const h = input[3]*1

let width = 0
let height = 0

// 가로 확인
w-x >= x ? width = x : width = w-x

// 세로 확인
h-y >= y ? height = y : height = h-y

console.log(width >= height ? height : width)