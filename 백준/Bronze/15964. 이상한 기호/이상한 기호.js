const input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

const A = input[0]*1
const B = input[1]*1

console.log((A+B)*(A-B))