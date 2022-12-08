const input = require('fs').readFileSync('예제.txt').toString().split('\n');

const A = input[0]
const B = input[1]

const three = Number(A) * Number(B.slice(2,3))
const four = Number(A) * Number(B.slice(1,2))
const five = Number(A) * Number(B.slice(0,1))
const six = Number(A) * Number(B)

console.log(three)
console.log(four)
console.log(five)
console.log(six)