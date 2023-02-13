const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const A = input[0]*1
const B = input[1]*1
const V = input[2]*1

const result = Math.ceil((V-A) / (A-B)) + 1

console.log(result)