const input = require('fs').readFileSync('예제.txt').toString().split(' ');

const a = +input[0]
const b = +input[1]

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(Math.trunc(a/b))
console.log(a%b)