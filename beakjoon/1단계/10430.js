const input = require('fs').readFileSync('예제.txt').toString().split(' ');

const A = Number(input[0])
const B = Number(input[1])
const C = Number(input[2])

console.log((A+B) % C)
console.log(((A%C) + (B%C)) % C)
console.log((A*B) % C)
console.log(((A%C) * (B%C)) % C)