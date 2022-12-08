const input = require('fs').readFileSync('예제.txt').toString().split('\n');
const N = input[0]
const inputSet = input[1].split(' ')

const max = String(Math.max(...inputSet))
const min = String(Math.min(...inputSet))

console.log(min + " " + max)
