const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const arr = input[1].split(' ')
const v = input[2]

console.log(arr.filter((el)=>el === v).length)