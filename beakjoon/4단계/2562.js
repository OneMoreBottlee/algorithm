const input = require('fs').readFileSync('예제.txt').toString().split('\n');

const max = String(Math.max(...input))
const maxIndex = input.indexOf(max)

console.log(max)
console.log(maxIndex+1)