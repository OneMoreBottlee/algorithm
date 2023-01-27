const input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

console.log(Math.abs(input[0]*1 - input[1]*1))